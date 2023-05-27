import { Card } from "@tremor/react";
import React from "react";
import CardHeader from "./CardHeader";
import Select from "../FormElement/select/select";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "../FormElement/input/input";
import useDeviceProperties from "../../Hooks/UseMediaQueries";

const style = {
  inputTitle: `capitalize leading-4 tracking-wide my-`,
  inputTitleC: `capitalize leading-4 tracking-wide  ml-4 md:mt-3`,
  hr: ` my-5 w-[100%] text-[3em] font-black `,
  inputDivider: `md:flex  items-center justify-between my-3`,
  selectWidth: `md:w-[48%] `,
  inputWidth: `md:w-[48%]`,

  errors: `block text-red-500 capitalize  leading-4 tracking-wide my-4 ml-4`,
};

const ProductInventory = () => {
  const { isTabletOrMobile } = useDeviceProperties();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  function onItemAdd() {
    append({ id: uuidv4() });
  }

  function onItemDelete(index: number) {
    remove(index);
  }
  return (
    <Card>
      <CardHeader title="product inventory" />
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        <span className="flex flex-col justify-between ">
          <h1 className={`${style.inputTitle} my-3`}>status*</h1>

          <Select
            placeholder="status*"
            // @ts-ignore
            // options={categoryOptions}
            // field={categoryOptions.find(
            //   ({ value }: any) => value === categoryField.value
            // )}
            // field={categoryOptions.find(
            //   (option) => option.value === getValues("category")
            // )}
            // handleSelectChange={handleCategoryChange}
          />
        </span>
        <span className="flex flex-col justify-between ">
          <h1 className={`${style.inputTitle} my-2`}>features*</h1>

          <Select
            placeholder="features*"
            // @ts-ignore
            // options={categoryOptions}
            // field={categoryOptions.find(
            //   ({ value }: any) => value === categoryField.value
            // )}
            // field={categoryOptions.find(
            //   (option) => option.value === getValues("category")
            // )}
            // handleSelectChange={handleCategoryChange}
          />
        </span>
      </div>
      <span className="flex flex-col justify-between w-full">
        <h1 className={`${style.inputTitle} my-2`}>specifications*</h1>
        <span>
          {fields.map((item: any, index: number) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between w-full gap-x-5 lg:flex-row "
            >
              <label className="w-full ">
                name
                <Input
                  type="text"
                  name="name"
                  placeholder="name*"
                  inputFull
                  // Width="300px"
                  required
                  isWhiteBg
                  isCurve
                  // errors={errors}
                  // inputRef={register("name", { required: true })}
                />
              </label>
              <br />
              <label className="w-full ">
                value
                <Input
                  type="text"
                  name="value"
                  placeholder="value*"
                  inputFull
                  // Width="300px"
                  required
                  isWhiteBg
                  isCurve
                  // errors={errors}
                  // inputRef={register("name", { required: true })}
                />
              </label>
              {isTabletOrMobile ? (
                <button
                  type="button"
                  onClick={() => onItemDelete(index)}
                  className="p-1 mt-4 border border-gray-500 rounded-md hover:border-red-500 hover:text-red-500"
                >
                  remove
                </button>
              ) : (
                <button
                  className="mt-6 hover:text-red-500"
                  type="button"
                  onClick={() => onItemDelete(index)}
                >
                  <MdDeleteForever size={30} />
                </button>
                // <button
                //   type="button"
                //   onClick={() => onItemDelete(index)}
                //   className="p-1 mt-4 border border-gray-500 rounded-md hover:border-red-500 hover:text-red-500"
                // >
                //   remove
                // </button>
              )}
            </div>
          ))}
        </span>
        <br />
        <span className="grid place-items-center">
          <button
            className="flex justify-center hover:text-primary"
            type="button"
            onClick={onItemAdd}
          >
            <AiFillPlusCircle size={20} style={{ marginRight: "5px" }} />{" "}
            <span>Add an item</span>
          </button>
        </span>
      </span>
    </Card>
  );
};

export default ProductInventory;
function uuidv4() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
