import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newCategoryDataData, newCategoryDataSchema } from "./NewCategoryData";
import { BsUpload } from "react-icons/bs";
import { useRef } from "react";
import useSingleImage from "../../Hooks/useSingleImage";

const NewCategoryForm = () => {
  const widgetRef = useRef();
  const s = useSingleImage(widgetRef);
  const methods = useForm<newCategoryDataData>({
    resolver: yupResolver(newCategoryDataSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };
  const submitForm = (data: any) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full flex flex-col">
      <div className=" flex items-center justify-between">
        <Typography className="capitalize"> name</Typography>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          required
          isWhiteBg
          isCurve
          Width="70%"
          inputRef={register("name")}
        />
      </div>

      <div className=" flex items-center justify-between">
        <Typography className=" capitalize"> description</Typography>
        <Input
          type="text"
          placeholder="description"
          name="description"
          required
          isWhiteBg
          isCurve
          Width="70%"
          inputRef={register("description")}
        />
      </div>
      <div className=" flex items-center text-center justify-between">
        <Typography className=" capitalize">image</Typography>
        <Input
          type="text"
          placeholder="image"
          name="image"
          required
          isWhiteBg
          isCurve
          Width="70%"
          inputRef={register("image")}
        />
      </div>
      <div className="flex justify-end  mt-2 ">
        <button className=" w-fit bg-primary  text-white capitalize rounded-md px-4 py-1">
          save
        </button>
      </div>
    </form>
  );
};

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
