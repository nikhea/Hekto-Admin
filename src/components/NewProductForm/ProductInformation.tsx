import { Card, Text } from "@tremor/react";
import { useFormContext, useController } from "react-hook-form";
import Input from "../FormElement/input/input";
import Select from "../FormElement/select/select";
import CardHeader from "./CardHeader";
import { useFetchCategories } from "../../Hooks/useCategories/useFetchCategories";
import { useEffect, useState } from "react";
import usefetchAllSubCategories from "../../Hooks/useSubCategory/usefetchAllSubCategories";

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
  const categories = useFetchCategories();
  const subCategories = usefetchAllSubCategories();
  const [categoryOptions, setCategoryOptions] = useState([""]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([""]);

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const { field: categoryField } = useController({
    name: "category",
    control,
  });
  const { field: subCategoryField } = useController({
    name: "subcategory",
    control,
  });
  useEffect(() => {
    const getData = async () => {
      const arr: any = [];
      let result = categories;
      result.map((countries: any) => {
        return arr.push({ value: countries.name, label: countries.name });
      });
      setCategoryOptions(arr);
    };
    getData();
  }, [watch]);
  useEffect(() => {
    const getData = async () => {
      const arr: any = [];
      let result = subCategories;
      result.map((subCategory: any) => {
        return arr.push({ value: subCategory.name, label: subCategory.name });
      });
      setSubCategoryOptions(arr);
    };
    getData();
  }, [categoryOptions, watch]);
  const handleCategoryChange = (option: any) => {
    categoryField.onChange(option.value);

    return categoryField.onChange(option.value);
  };
  const handleSubCategoryChange = (option: any) => {
    subCategoryField.onChange(option.value);

    return subCategoryField.onChange(option.value);
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

            <Select
              placeholder="category*"
              // @ts-ignore
              options={categoryOptions}
              field={categoryOptions.find(
                ({ value }: any) => value === categoryField.value
              )}
              handleSelectChange={handleCategoryChange}
            />
          </span>
          <span className="flex flex-col justify-between ">
            <h1 className={`${style.inputTitle} my-2`}>subcategory*</h1>

            <Select
              placeholder="subcategory*"
              // @ts-ignore
              // options={categoryOptions}
              options={subCategoryOptions}
              field={subCategoryOptions.find(
                ({ value }: any) => value === subCategoryField.value
              )}
              handleSelectChange={handleSubCategoryChange}
            />
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
      </Card>
    </div>
  );
};

export default ProductInformation;
