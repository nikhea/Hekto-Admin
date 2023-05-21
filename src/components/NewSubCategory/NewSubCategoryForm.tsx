import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  newSubCategoryDataData,
  newSubCategoryDataSchema,
} from "./NewSubCategoryData";
import useCreateCategories from "../../Hooks/useCategories/useCreateCategories";
import { useEffect, useState } from "react";
import Select from "../FormElement/select/select";

const NewSubCategoryForm = ({ categories }: any) => {
  const [categoryOptions, setCategoryOptions] = useState([""]);

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
  }, []);
  const methods = useForm<newSubCategoryDataData>({
    resolver: yupResolver(newSubCategoryDataSchema),
    defaultValues: {},
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;
  const { field: categoryField } = useController({
    name: "category",
    control,
  });
  const handleCategoryChange = (option: any) => {
    categoryField.onChange(option.value);

    return categoryField.onChange(option.value);
  };

  const submitForm = (data: any) => {
    let subCategoriesData = data;
    if (subCategoriesData) {
      console.log(subCategoriesData);
    } else {
      console.log(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="grid w-full place-items-center"
    >
      <div className=" w-[80%]  ">
        <div className="flex flex-col justify-between ">
          <Typography className="capitalize"> name</Typography>
          <Input
            type="text"
            placeholder="Name*"
            name="name"
            required
            isWhiteBg
            isCurve
            // Width="70%"
            inputRef={register("name")}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <Typography className="capitalize ">image url</Typography>
          <Input
            type="text"
            placeholder="image*"
            name="image"
            required
            isWhiteBg
            isCurve
            // Width="70%"
            inputRef={register("coverPhoto")}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <Typography className="capitalize"> category</Typography>

          <Select
            placeholder="Category*"
            // @ts-ignore
            options={categoryOptions}
            field={categoryOptions.find(
              ({ value }: any) => value === categoryField.value
            )}
            handleSelectChange={handleCategoryChange}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <Typography className="capitalize "> description</Typography>
          <textarea
            placeholder="type your message*"
            className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500"
            {...register("description", { required: true, maxLength: 1000 })}
          />
        </div>
        <div className="flex justify-center mt-2 ">
          <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSubCategoryForm;
