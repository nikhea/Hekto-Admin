import { Card } from "@tremor/react";
import React, { FC } from "react";
import CardHeader from "./CardHeader";
import Switch from "react-switch";
import { Controller, useFormContext } from "react-hook-form";
import ButtonLoading from "../FormElement/Button/ButtonLoading";
import useUpdateProduct from "../../Hooks/useProducts/useUpdateProduct";

const ProductState: FC<{
  isLoading: boolean;
}> = ({ isLoading }) => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const colorSelect = "#FB2E86";
  return (
    <Card>
      <CardHeader title="product state" />
      <div className="grid md:grid-cols-2 gap-y-3 lg:flex md:justify-evenly">
        <label className="grid items-center grid-cols-2 md:flex md:gap-2">
          <span className="mr-10 lg:mr-0">Featured:</span>
          <Controller
            name="featured"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(checked) => field.onChange(checked)}
                checked={field.value}
                onColor={colorSelect}
                activeBoxShadow="0px"
              />
            )}
          />
        </label>
        <label
          id="neat-label"
          className="grid items-center grid-cols-2 md:flex md:gap-2"
        >
          <span className="mr-10 lg:mr-0">Best Seller:</span>
          <Controller
            name="bestSeller"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(checked) => field.onChange(checked)}
                checked={field.value}
                onColor={colorSelect}
                activeBoxShadow="0px"
                aria-labelledby="neat-label"
              />
            )}
          />
        </label>
        <label className="grid items-center grid-cols-2 md:flex md:gap-2">
          <span className="mr-5 lg:mr-0">New Arrival:</span>
          <Controller
            name="newArrival"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(checked) => field.onChange(checked)}
                checked={field.value}
                onColor={colorSelect}
                activeBoxShadow="0px"
              />
            )}
          />
        </label>
        <label className="grid items-center grid-cols-2 md:flex md:gap-2">
          <span className="mr-5 lg:mr-0">Special Offer:</span>
          <Controller
            name="specialOffer"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(checked) => field.onChange(checked)}
                checked={field.value}
                onColor={colorSelect}
                activeBoxShadow="0px"
              />
            )}
          />
        </label>
      </div>
      <div className="flex justify-center w-full mt-10 ">
        {/* <button className="px-4 py-2 text-white capitalize rounded-md w-fit bg-primary">
          update
        </button> */}
        <ButtonLoading text="update" isLoading={isLoading} />
      </div>
    </Card>
  );
};

export default ProductState;
