import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { ProductForm, productSchema } from "./ProductShcema";
import ProductInformation from "./ProductInformation";
import ProductDescrption from "./ProductDescrption";
import ProductInventory from "./ProductInventory";
import ProductImages from "./ProductImages";
const ProductForm = () => {
  const methods = useForm<ProductForm>({
    resolver: yupResolver(productSchema),
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = methods;
  console.log(watch());

  const submitForm = (data: any) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-y-5">
          <ProductInformation />
          <ProductDescrption />
          {/* <ProductImages /> */}
          <ProductInventory />
        </div>
        <div className="flex justify-center mt-2 ">
          <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            create
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
};

export default ProductForm;
