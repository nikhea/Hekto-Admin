import { Card } from "@tremor/react";
import React from "react";
import CardHeader from "./CardHeader";
import Switch from "react-switch";
import { Controller, useFormContext } from "react-hook-form";

const ProductState = () => {
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
      <div className="flex justify-evenly">
        <label id="neat-label" className="flex items-center gap-2">
          <span>Bestseller:</span>
          <Controller
            name="bestseller"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(checked) => field.onChange(checked)}
                checked={field.value}
                onColor={colorSelect}
                // uncheckedIcon={false}
                // checkedIcon={false}
                activeBoxShadow="0px"
                aria-labelledby="neat-label"
              />
            )}
          />
        </label>
        <label className="flex items-center gap-2">
          <span>Featured:</span>
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
        <label className="flex items-center gap-2">
          <span>New Arrival:</span>
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
        <label className="flex items-center gap-2">
          <span>Special Offer:</span>
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
      <div className="flex justify-center w-full mt-5 ">
        <button className="px-4 py-2 text-white capitalize rounded-md w-fit bg-primary">
          create
        </button>
      </div>
    </Card>
  );
};

export default ProductState;
