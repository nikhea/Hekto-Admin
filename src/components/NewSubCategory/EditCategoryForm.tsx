import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  newCategoryDataData,
  newCategoryDataSchema,
} from "./NewSubCategoryData";
import { BsUpload } from "react-icons/bs";
import { FC, useEffect, useRef } from "react";

import useUpdateCategories from "../../Hooks/useCategories/useUpdateCategories";

interface NewCategoryFormProps {
  defaultCategory?: any;
}
const EditCategoryForm: FC<NewCategoryFormProps> = ({ defaultCategory }) => {
  const { updateCategories } = useUpdateCategories();

  const methods = useForm<newCategoryDataData>({
    resolver: yupResolver(newCategoryDataSchema),
    defaultValues: {},
  });
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;
  useEffect(() => {
    if (defaultCategory.name) {
      setValue("name", defaultCategory.name);
      setValue("description", defaultCategory.description);
      setValue("coverPhoto", defaultCategory.coverPhoto);
    }
  }, [defaultCategory, setValue]);
  const submitForm = (data: any) => {
    let categoriesData = data;
    if (categoriesData) {
      if (defaultCategory.name) {
        updateCategories(defaultCategory.name, categoriesData);
      }
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
            placeholder="Name"
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
            placeholder="image"
            name="image"
            required
            isWhiteBg
            isCurve
            // Width="70%"
            inputRef={register("coverPhoto")}
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
            update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCategoryForm;
