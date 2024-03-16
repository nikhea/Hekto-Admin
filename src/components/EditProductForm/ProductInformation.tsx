import { Card, Text } from "@tremor/react";
import { useFormContext, useController } from "react-hook-form";
import Input from "../FormElement/input/input";
import Select from "../FormElement/select/select";
import CardHeader from "./CardHeader";
import { useFetchCategories } from "../../Hooks/useCategories/useFetchCategories";
import { useEffect, useState } from "react";
import usefetchAllSubCategories from "../../Hooks/useSubCategory/usefetchAllSubCategories";
import { useModelStore } from "../../store/useModelStore";
import BasicModal from "../FormElement/model/model";

const style = {
  inputTitle: `capitalize leading-4 tracking-wide my-`,
  inputTitleC: `capitalize leading-4 tracking-wide  ml-4 md:mt-3`,
  hr: ` my-5 w-[100%] text-[3em] font-black `,
  inputDivider: `md:flex  items-center justify-between my-3`,
  selectWidth: `md:w-[48%] `,
  inputWidth: `md:w-[48%]`,

  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
};
const ProductInformation = () => {
  const { handleOpen } = useModelStore();
  const categories = useFetchCategories();
  const subCategories = usefetchAllSubCategories();
  const [modalType, setModalType] = useState("");

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleInputChangeCategory = (value: string) => {
    setValue("category", value);
  };
  const handleInputChangeSubCategory = (value: string) => {
    setValue("subcategory", value);
  };
  const handleOpenModal = (type: string) => {
    setModalType(type);
    handleOpen();
  };

  return (
    <div>
      <Card>
        <CardHeader title="product information" />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          <span>
            <h1 className={style.inputTitle}>name*</h1>
            <Input
              type="text"
              name="name"
              placeholder="product name*"
              inputFull
              // required
              isWhiteBg
              isCurve
              errors={errors}
              inputRef={register("name", { required: true })}
            />
          </span>
          <span>
            <h1 className={style.inputTitle}>price*</h1>
            <Input
              type="number"
              name="price"
              placeholder="product price*"
              inputFull
              // required
              isWhiteBg
              isCurve
              errors={errors}
              inputRef={register("price", { required: true })}
            />
          </span>
          <span className="flex flex-col justify-between ">
            <h1 className={`${style.inputTitle} my-3`}>category*</h1>
            <div onClick={() => handleOpenModal("category")} className="">
              <Input
                type="text"
                placeholder="category*"
                name="category"
                required
                isWhiteBg
                isCurve
                Width="100%"
                inputRef={register("category", { required: true })}
              />
            </div>
          </span>
          <span className="flex flex-col justify-between ">
            <h1 className={`${style.inputTitle} my-2`}>subcategory*</h1>
            <div onClick={() => handleOpenModal("subcategory")} className="">
              <Input
                type="text"
                placeholder="sub category*"
                name="subcategory"
                required
                isWhiteBg
                isCurve
                Width="100%"
                inputRef={register("subcategory", { required: true })}
              />
            </div>
          </span>
          <span>
            <h1 className={`${style.inputTitle} my-2`}>quantity*</h1>
            <Input
              type="number"
              name="quantity"
              placeholder="product quantity*"
              inputFull
              // required
              isWhiteBg
              isCurve
              errors={errors}
              inputRef={register("quantity", { required: true })}
            />
          </span>
          <span>
            <h1 className={`${style.inputTitle} my-2`}>rating*</h1>
            <Input
              type="number"
              name="rating"
              placeholder="product rating*"
              inputFull
              // required
              isWhiteBg
              isCurve
              errors={errors}
              inputRef={register("rating", { required: true })}
            />
          </span>
        </div>
        <BasicModal
          data={modalType === "category" ? categories : subCategories}
          onInputChange={
            modalType === "category"
              ? handleInputChangeCategory
              : handleInputChangeSubCategory
          }
          titleText={
            modalType === "category" ? "Select Category" : "Select Subcategory"
          }
          subTitleText={
            modalType === "category"
              ? "Select the category to be added."
              : "Select the subcategory to be added."
          }
          btnText={
            modalType === "category" ? "Select Category" : "Select Subcategory"
          }
          searchText={
            modalType === "category"
              ? "Filter categories by name"
              : "Filter subcategories by name"
          }
        />
      </Card>
    </div>
  );
};

export default ProductInformation;
{
  /* <Select
placeholder="category*"
// @ts-ignore
options={categoryOptions}
field={categoryOptions.find(
  ({ value }: any) => value === getValues("category")
)}
handleSelectChange={handleCategoryChange}
/> */
}

// const handleCategoryChange = (option: any) => {
//   categoryField.onChange(option.value);

//   return categoryField.onChange(option.value);
// };
// const handleSubCategoryChange = (option: any) => {
//   subCategoryField.onChange(option.value);

//   return subCategoryField.onChange(option.value);
// };
// const { field: categoryField } = useController({
//   name: "category",
//   control,
// });
// const { field: subCategoryField } = useController({
//   name: "subcategory",
//   control,
// });
// useEffect(() => {
//   const getData = async () => {
//     const arr: any = [];
//     let result = categories;
//     result.map((countries: any) => {
//       return arr.push({ value: countries.name, label: countries.name });
//     });
//     setCategoryOptions(arr);
//   };
//   getData();
// }, [watch]);
// useEffect(() => {
//   const getData = async () => {
//     const arr: any = [];
//     let result = subCategories;
//     result.map((subCategory: any) => {
//       return arr.push({ value: subCategory.name, label: subCategory.name });
//     });
//     setSubCategoryOptions(arr);
//   };
//   getData();
// }, [categoryOptions, watch]);
// const categories = useFetchCategories();
// const subCategories = usefetchAllSubCategories();
// const [categoryOptions, setCategoryOptions] = useState([""]);
// const [subCategoryOptions, setSubCategoryOptions] = useState([""]);
{
  /* <Select
placeholder="subcategory*"
// @ts-ignore
// options={categoryOptions}
options={subCategoryOptions}
field={subCategoryOptions.find(
  ({ value }: any) => value === getValues("subcategory")
)}
handleSelectChange={handleSubCategoryChange}
/> */
}
