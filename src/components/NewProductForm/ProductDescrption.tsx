import { Card, Text } from "@tremor/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CardHeader from "./CardHeader";
import { useFormContext } from "react-hook-form";
const ProductDescrption = () => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const messageContent = watch("description");

  const onMessagenChange = (editorState: any) => {
    setValue("description", editorState);
  };
  return (
    <Card>
      <CardHeader title="product description" />
      <div>
        <label>description*</label>
        <ReactQuill
          theme="snow"
          value={messageContent}
          onChange={onMessagenChange}
          className="text-editor"
          placeholder="Your Message..."
        />
      </div>
      <div className="flex flex-col justify-between ">
        <h1 className="capitalize ">short description*</h1>
        <textarea
          placeholder="type your message*"
          className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500"
          {...register("shortDescription", { required: true, maxLength: 1000 })}
        />
      </div>
    </Card>
  );
};

export default ProductDescrption;
