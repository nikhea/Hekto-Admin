import { Badge, Card } from "@tremor/react";
import CardHeader from "./CardHeader";
import Select from "../FormElement/select/select";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { useController, useFieldArray, useFormContext } from "react-hook-form";
import Input from "../FormElement/input/input";
import useDeviceProperties from "../../Hooks/UseMediaQueries";
import { statusOption } from "./defaultValue";
import CreatableSelect from "../FormElement/CreatableSelect/CreatableSelect";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useFeaturesStore } from "../../store/useProductFeatures";
import { useEffect } from "react";
const style = {
  inputTitle: `capitalize leading-4 tracking-wide my-`,
  inputTitleC: `capitalize leading-4 tracking-wide  ml-4 md:mt-3`,
  hr: ` my-5 w-[100%] text-[3em] font-black `,
  inputDivider: `md:flex  items-center justify-between my-3`,
  selectWidth: `md:w-[48%] `,
  inputWidth: `md:w-[48%]`,

  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
};

const ProductInventory = ({ productFeatures }: any) => {
  const { setFeatures, features, removeFeatures, addFeatures } =
    useFeaturesStore();
  const { isTabletOrMobile } = useDeviceProperties();

  const {
    register,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  useEffect(() => {
    if (productFeatures && !features.length) {
      setFeatures(productFeatures);
      setValue("features", features);
    }
  }, [setFeatures, features, productFeatures]);
  const { field: statusField } = useController({
    name: "status",
    control,
  });
  const { field: FeaturesField } = useController({
    name: "features",
    control,
  });
  const handleStatusChange = (option: any) => {
    statusField.onChange(option.value);

    return statusField.onChange(option.value);
  };
  const handleFeaturesChange = (option: any) => {
    FeaturesField.onChange(option.value);
    const featuresl = option.map((element: any) => {
      return element.value;
    });

    option.forEach((option: any) => {
      if (!featuresl.includes(features)) {
        addFeatures(option.value);
      }
    });
    return FeaturesField.onChange(featuresl);
  };
  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });

  function onItemAdd() {
    append({ id: uuidv4() });
  }

  function onItemDelete(index: number) {
    remove(index);
  }

  const handleRemoveFeature = (index: number) => {
    removeFeatures(index);
  };
  const featuresDisplay = features
    ? features.map((feature: any, index: number) => (
        <div key={index} className="flex items-center gap-3 mx-1 ">
          <Badge className="flex items-center">
            <span className="flex items-center gap-1 ">
              <IoCloseCircleOutline
                className="cursor-pointer"
                onClick={() => handleRemoveFeature(index)}
              />
              {feature}
            </span>
          </Badge>
        </div>
      ))
    : null;

  // const featuresDisplay = features.map((feature: any, index: number) => (
  //   <div key={index} className="flex items-center gap-3 mx-1 ">
  //     <Badge className="flex items-center">
  //       <span className="flex items-center gap-1 ">
  //         <IoCloseCircleOutline
  //           className="cursor-pointer"
  //           onClick={() => handleRemoveFeature(index)}
  //         />
  //         {feature}
  //       </span>
  //     </Badge>
  //   </div>
  // ));
  return (
    <Card>
      <CardHeader title="product inventory" />
      <div className="grid mt-5 md:grid-cols-2 gap-x-10 gap-y-5">
        <span className="flex flex-col justify-between ">
          <h1 className={`${style.inputTitle} my-3`}>status*</h1>

          <Select
            placeholder="status*"
            // @ts-ignore
            options={statusOption}
            field={statusOption.find(
              ({ value }: any) => value === statusField.value
            )}
            handleSelectChange={handleStatusChange}
          />
        </span>
        <span className="flex flex-col justify-between ">
          <h1 className={`${style.inputTitle} my-2`}>features*</h1>
          <p className="text-xs text-gray-500 capitalize">
            create new features for your products
          </p>
          <CreatableSelect
            placeholder="add features*"
            // options={statusOption}
            field={statusOption.find(
              ({ value }: any) => value === getValues("features")
            )}
            handleSelectChange={handleFeaturesChange}
          />
        </span>
        <div className="flex flex-wrap items-end justify-end col-span-2">
          <span className="flex flex-wrap items-end justify-end col-span-2 gap-1 ">
            {featuresDisplay}
          </span>
        </div>
      </div>
      <span className="flex flex-col justify-between w-full mt-10">
        <h1 className={`${style.inputTitle} my-2`}>specifications*</h1>
        <span>
          {fields.map((specifications: any, index: number) => (
            <div
              key={specifications.id}
              className="flex flex-col items-center justify-between w-full gap-x-5 lg:flex-row "
            >
              <label className="w-full ">
                name
                <Input
                  type="text"
                  name="name"
                  placeholder="name*"
                  inputFull
                  // Width="300px"
                  required
                  isWhiteBg
                  isCurve
                  inputRef={register(`specifications[${index}].name`, {
                    required: true,
                  })}
                />
              </label>
              <br />
              <label className="w-full ">
                value
                <Input
                  type="text"
                  name="value"
                  placeholder="value*"
                  inputFull
                  // Width="300px"
                  required
                  isWhiteBg
                  isCurve
                  // errors={errors}
                  inputRef={register(`specifications[${index}].value`, {
                    required: true,
                  })}
                />
              </label>
              {isTabletOrMobile ? (
                <button
                  type="button"
                  onClick={() => onItemDelete(index)}
                  className="p-1 mt-4 border border-gray-500 rounded-md hover:border-red-500 hover:text-red-500"
                >
                  remove
                </button>
              ) : (
                <button
                  className="mt-6 hover:text-red-500"
                  type="button"
                  onClick={() => onItemDelete(index)}
                >
                  <MdDeleteForever size={30} />
                </button>
                // <button
                //   type="button"
                //   onClick={() => onItemDelete(index)}
                //   className="p-1 mt-4 border border-gray-500 rounded-md hover:border-red-500 hover:text-red-500"
                // >
                //   remove
                // </button>
              )}
            </div>
          ))}
        </span>
        <br />
        <span className="grid place-items-center">
          <button
            className="flex justify-center hover:text-primary"
            type="button"
            onClick={onItemAdd}
          >
            <AiFillPlusCircle size={20} style={{ marginRight: "5px" }} />{" "}
            <span>Add an item</span>
          </button>
        </span>
      </span>
    </Card>
  );
};

export default ProductInventory;
function uuidv4() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// options={categoryOptions}
// field={categoryOptions.find(
//   ({ value }: any) => value === categoryField.value
// )}
// field={categoryOptions.find(
//   (option) => option.value === getValues("category")
// )}
// handleSelectChange={handleCategoryChange}
