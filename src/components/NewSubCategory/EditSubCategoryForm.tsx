import Typography from "@mui/material/Typography";
import Input from "../FormElement/input/input";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { FC, useEffect, useRef, useState } from "react";

import useUpdateSubcategories from "../../Hooks/useSubCategory/useUpdateSubcategories";
import {
  newSubCategoryDataData,
  newSubCategoryDataSchema,
} from "./NewSubCategoryData";
import Select from "../FormElement/select/select";
import { TiCamera } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import useSingleImage from "../../Hooks/useSingleImage";
import ButtonLoading from "../FormElement/Button/ButtonLoading";
import { useFetchCategories } from "../../Hooks/useCategories/useFetchCategories";
import { useModelStore } from "../../store/useModelStore";
import BasicModal from "../FormElement/model/model";

interface NewCategoryFormProps {
  defaultCategory?: any;
  categories: any;
}
const EditSubCategoryForm: FC<NewCategoryFormProps> = ({
  defaultCategory,
  // categories,
}) => {
  const { handleOpen } = useModelStore();

  const categories = useFetchCategories();

  // const { name } = useParams<{ name?: string }>();

  const { updateSubCategories, updateSubCategoriesIsLoading } =
    useUpdateSubcategories();

  const [categoryOptions, setCategoryOptions] = useState([""]);
  const { newImageData, setNewImageData } = useSingleImageStore();
  const foldername = `new-updated-subcategories-${Date.now()}`;
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
    setValue,
    getValues,
    control,
    formState: { errors },
  } = methods;

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

  useEffect(() => {
    if (defaultCategory.name) {
      setValue("name", defaultCategory.name);
      setValue("description", defaultCategory.description);
      setValue("photo", defaultCategory.coverPhoto);
      setValue("category", defaultCategory.category.name);
    }
  }, [defaultCategory, setValue]);

  const handleInputChange = (value: string) => {
    setValue("category", value);
  };
  // const { field: categoryField } = useController({
  //   name: "category",
  //   control,
  // });
  // const handleCategoryChange = (option: any) => {
  //   categoryField.onChange(option.value);

  //   return categoryField.onChange(option.value);
  // };

  useEffect(() => {
    if (newImageData?.secure_url) {
      setValue("photo", newImageData);
    }
  }, [newImageData, setNewImageData, setValue]);

  const submitForm = (data: any) => {
    console.log(data);

    // let subCategoriesData = data;
    // if (subCategoriesData) {
    //   if (defaultCategory.name) {
    //     subCategoriesData;
    //     updateSubCategories(name, subCategoriesData);
    //   }
    // } else {
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="grid w-full place-items-center"
    >
      <div className="!w-full lg:!w-[80%]">
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
        <div className="flex flex-col justify-between mt-2">
          <Typography className="!mb-1 capitalize">image url</Typography>
          {!newImageData ? (
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
                src={defaultCategory?.photo?.secure_url}
                alt={defaultCategory?.photo?.public_id}
              />
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
        <div className="flex flex-col justify-between my-2">
          <Typography className="capitalize "> category</Typography>
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

          {/* <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            update
          </button> */}
          <ButtonLoading
            text="update"
            isLoading={updateSubCategoriesIsLoading}
          />
        </div>
      </div>
    </form>
  );
};

export default EditSubCategoryForm;

const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
};

{
  /* <Select
placeholder="Category*"
// @ts-ignore
options={categoryOptions}
// field={categoryOptions.find(
//   ({ value }: any) => value === categoryField.value
// )}
field={categoryOptions.find(
  (option) => option.value === getValues("category")
)}
handleSelectChange={handleCategoryChange}
/> */
}
{
  /* <div className="flex flex-col justify-between ">
<Typography className="capitalize ">image url</Typography>
<Input
  type="text"
  placeholder="image"
  name="image"
  required
  isWhiteBg
  isCurve
  inputRef={register("photo")}
/>
</div> */
}
