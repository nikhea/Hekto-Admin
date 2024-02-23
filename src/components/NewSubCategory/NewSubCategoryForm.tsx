import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  newSubCategoryDataData,
  newSubCategoryDataSchema,
} from "./NewSubCategoryData";
import { FC, useEffect, useRef, useState } from "react";
import Select from "../FormElement/select/select";
import useSingleImage from "../../Hooks/useSingleImage";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { BsUpload } from "react-icons/bs";
import { TiCamera } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useCreateSubCategories from "../../Hooks/useSubCategory/useCreateSubCategories";
import ButtonLoading from "../FormElement/Button/ButtonLoading";
import BasicModal from "../FormElement/model/model";
import { useFetchCategories } from "../../Hooks/useCategories/useFetchCategories";
import { useModelStore } from "../../store/useModelStore";

const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
};
interface INewCategories {
  categories: any;
}
const NewSubCategoryForm: FC<INewCategories> = () => {
  const { handleOpen } = useModelStore();
  // const [open, setOpen] = useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const categories = useFetchCategories();

  const { createNewSubCategories, status, createSubCategoriesisLoading } =
    useCreateSubCategories();

  const { newImageData, setNewImageData } = useSingleImageStore();

  const foldername = `subcategories-${Date.now()}`;
  const widgetRef = useRef();
  const s = useSingleImage(widgetRef, foldername);
  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };

  const methods = useForm<newSubCategoryDataData>({
    resolver: yupResolver(newSubCategoryDataSchema),
    defaultValues: {},
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = methods;
  useEffect(() => {
    if (newImageData?.secure_url) {
      setValue("photo", newImageData);
    }
  }, [newImageData, setNewImageData, setValue]);
  const handleInputChange = (value: string) => {
    setValue("category", value);
  };

  const submitForm = (data: any) => {
    let subCategoriesData = data;
    console.log(subCategoriesData);

    // if (subCategoriesData) {
    //   createNewSubCategories({ subCategoriesData });
    // }
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
      <div className=" w-[80%]">
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
          <Typography className="capitalize ">image </Typography>
          {!newImageData ? (
            <div
              onClick={openWidget}
              className={`flex flex-col items-center justify-center w-full h-56 text-center border-2 border-dashed cursor-pointer group hover:border-primary ${
                errors.photo && " border-red-500"
              }`}
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
        <div className="flex flex-col justify-between my-5 ">
          <Typography className="capitalize"> category</Typography>
          <div onClick={handleOpen} className="">
            <Input
              type="text"
              placeholder="Category*"
              name="category"
              required
              isWhiteBg
              isCurve
              Width="100%"
              inputRef={register("category")}
            />
          </div>
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
          <BasicModal
            data={categories}
            onInputChange={handleInputChange}
            titleText="select category"
            subTitleText="Select the category too be added."
            btnText="select category"
            searchText="filter categories by name"
          />

          <ButtonLoading text="save" isLoading={createSubCategoriesisLoading} />
        </div>
      </div>
    </form>
  );
};

export default NewSubCategoryForm;

// <Input
// type="text"
// placeholder="image*"
// name="image"
// required
// isWhiteBg
// isCurve
// // Width="70%"
// inputRef={register("coverPhoto")}
// />
{
  /* <Select
placeholder="Category*"
// @ts-ignore
options={categoryOptions}
field={categoryOptions.find(
  ({ value }: any) => value === categoryField.value
)}
handleSelectChange={handleCategoryChange}
/> */
}
{
  /* <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            save
          </button> */
}
// const { field: categoryField } = useController({
//   name: "category",
//   control,
// });
// const handleCategoryChange = (option: any) => {
//   categoryField.onChange(option.value);

//   return categoryField.onChange(option.value);
// };

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
// }, []);
// const parentRef = useRef(null);
// const [categoryOptions, setCategoryOptions] = useState([""]);
{
  /* <BasicModal
open={open}
handleOpen={handleOpen}
handleClose={handleClose}
data={categories}
onInputChange={handleInputChange}
/> */
}
