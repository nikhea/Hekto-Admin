import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newCategoryDataData, newCategoryDataSchema } from "./NewCategoryData";
import { BsUpload } from "react-icons/bs";
import { FC, useEffect, useRef } from "react";
import useSingleImage from "../../Hooks/useSingleImage";
import useCreateCategories from "../../Hooks/useCategories/useCreateCategories";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TiCamera } from "react-icons/ti";
import ButtonLoading from "../FormElement/Button/ButtonLoading";
const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
};
interface NewCategoryFormProps {
  categoryId?: string;
}
const addCategoryImage = {};
const NewCategoryForm: FC<NewCategoryFormProps> = () => {
  const { newImageData, setNewImageData } = useSingleImageStore();

  const foldername = `categories-${Date.now()}`;
  const widgetRef = useRef();
  const s = useSingleImage(widgetRef, foldername, addCategoryImage);
  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };

  const { createNewCategories, status, createCategoriesisLoading } =
    useCreateCategories();
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
    if (newImageData?.secure_url) {
      setValue("photo", newImageData);
    }
  }, [newImageData, setNewImageData, setValue]);

  const submitForm = (data: any) => {
    let categoriesData = data;
    if (categoriesData) {
      createNewCategories({ categoriesData });
    } else {
    }
  };
  useEffect(() => {
    if (status === "success") {
      reset();
    }
  }, [status]);
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
            inputRef={register("name")}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <Typography className="capitalize ">image </Typography>
          {!newImageData ? (
            <div
              onClick={openWidget}
              className={`flex flex-col items-center justify-center w-full h-56 text-center border-2 border-dashed cursor-pointer group hover:border-primary ${
                errors.photo && " border-red-500"
              }`}
              // className="flex flex-col items-center justify-center w-full h-56 text-center border-2 border-dashed cursor-pointer group hover:border-primary"
            >
              <BsUpload
                className="text-[#8392A5] group-hover:text-primary"
                size={20}
              />
              <h1 className="group-hover:text-primary">
                {" "}
                choose an image file
              </h1>
            </div>
          ) : (
            <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
              <button type="button" className={style.btn} onClick={openWidget}>
                <TiCamera
                  color=" #3b5998"
                  size={25}
                  style={{ marginRight: "11px" }}
                />
                change photo
              </button>
              <LazyLoadImage
                className="object-cover w-full h-full rounded-md"
                src={newImageData.secure_url}
                alt={newImageData.public_id}
              />
            </div>
          )}
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
          {/* <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            save
          </button> */}
          <ButtonLoading text="save" isLoading={createCategoriesisLoading} />
        </div>
      </div>
    </form>
  );
};

export default NewCategoryForm;

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
{
  /* <Input
type="text"
placeholder="image*"
name="image"
required
isWhiteBg
isCurve
// Width="70%"
inputRef={register("coverPhoto")}
/> */
}
