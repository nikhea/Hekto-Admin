import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newCategoryDataData, newCategoryDataSchema } from "./NewCategoryData";
import { FC, useEffect, useRef } from "react";
import useUpdateCategories from "../../Hooks/useCategories/useUpdateCategories";
import { TiCamera } from "react-icons/ti";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useSingleImage from "../../Hooks/useSingleImage";

const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
};
interface NewCategoryFormProps {
  defaultCategory?: any;
}
const EditCategoryForm: FC<NewCategoryFormProps> = ({ defaultCategory }) => {
  const { newImageData, setNewImageData } = useSingleImageStore();

  const foldername = `update-categories-${Date.now()}`;
  const widgetRef = useRef();
  const s = useSingleImage(widgetRef, foldername);
  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };

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
      setValue("photo", defaultCategory.photo);
    }
  }, [defaultCategory, setValue]);
  useEffect(() => {
    if (newImageData?.secure_url) {
      setValue("photo", newImageData);
    }
  }, [newImageData, setNewImageData, setValue]);
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
          {!newImageData ? (
            <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
              <button className={style.btn} onClick={openWidget}>
                <TiCamera
                  color=" #3b5998"
                  size={25}
                  style={{ marginRight: "11px" }}
                />
                change photo
              </button>
              <LazyLoadImage
                className="object-cover w-full h-full rounded-md"
                src={defaultCategory?.photo?.secure_url}
                alt={defaultCategory?.photo?.public_id}
              />
            </div>
          ) : (
            <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
              <button className={style.btn} onClick={openWidget}>
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
          <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCategoryForm;

{
  /* <Input
type="text"
placeholder="image*"
name="image"
required
isWhiteBg
isCurve
inputRef={register("photo")}
/> */
}
