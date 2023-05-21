import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newCategoryDataData, newCategoryDataSchema } from "./NewCategoryData";
import { BsUpload } from "react-icons/bs";
import { FC, useRef } from "react";
import useSingleImage from "../../Hooks/useSingleImage";
import useCreateCategories from "../../Hooks/useCategories/useCreateCategories";

interface NewCategoryFormProps {
  categoryId?: string;
}
const NewCategoryForm: FC<NewCategoryFormProps> = ({ categoryId }) => {
  const { createNewCategories } = useCreateCategories();

  const methods = useForm<newCategoryDataData>({
    resolver: yupResolver(newCategoryDataSchema),
    defaultValues: {},
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitForm = (data: any) => {
    let categoriesData = data;
    if (categoriesData) {
      createNewCategories({ categoriesData });
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
// <Input
//           type="text"
//           placeholder="description"
//           name="description"
//           required
//           isWhiteBg
//           isCurve
//           // Width="70%"
//           inputRef={register("description")}
//         />
export default NewCategoryForm;
{
  /* <div className=" text-center group cursor-pointer hover:border-primary border-2 w-[69%] h-56 border-dashed flex flex-col justify-center items-center">
          <BsUpload
            className="text-[#8392A5] group-hover:text-primary"
            size={20}
          />
          <h1 className="group-hover:text-primary"> choose an image file</h1>
        </div> */
}

// <form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-full">
// <div className="flex items-center justify-between ">
//   <Typography className="capitalize"> name</Typography>
//   <Input
//     type="text"
//     placeholder="Name"
//     name="name"
//     required
//     isWhiteBg
//     isCurve
//     Width="70%"
//     inputRef={register("name")}
//   />
// </div>
// <div className="flex items-center justify-between ">
//   <Typography className="capitalize "> description</Typography>
//   <Input
//     type="text"
//     placeholder="description"
//     name="description"
//     required
//     isWhiteBg
//     isCurve
//     Width="70%"
//     inputRef={register("description")}
//   />
// </div>
// <div className="flex items-center justify-between text-center ">
//   <Typography className="capitalize ">image</Typography>
//   <Input
//     type="text"
//     placeholder="image"
//     name="image"
//     required
//     isWhiteBg
//     isCurve
//     Width="70%"
//     inputRef={register("coverPhoto")}
//   />
// </div>
// <div className="flex justify-end mt-2 ">
//   <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
//     save
//   </button>
// </div>
// </form>
