import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { ProductForm, productSchema } from "./ProductShcema";
import ProductInformation from "./ProductInformation";
import ProductDescrption from "./ProductDescrption";
import ProductInventory from "./ProductInventory";
import useFormPersist from "react-hook-form-persist";
import ProductImages from "./ProductImages";
import { useEffect } from "react";
import useCreateProducts from "../../Hooks/useProducts/useCreateProducts";
import ProductState from "./ProductState";
const ProductForm = () => {
  const { createNewProduct } = useCreateProducts();
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
  useFormPersist("products-storage", {
    watch,
    setValue,
    storage: window.localStorage,
  });
  useEffect(() => {
    const getData = () => {
      setValue("availability.inStock", true);
      setValue("availability.quantity", watch("quantity"));
      setValue("availability.deliveryDate", getDateTwoWeeksFromNow());
    };
    getData();
  }, [watch, setValue]);
  const submitForm = (data: any) => {
    if (data) {
      createNewProduct(data);
      reset();
    }
  };
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-y-5">
          <ProductInformation />
          <ProductDescrption />
          <ProductImages />
          <ProductInventory />
          <ProductState />
        </div>
        {/* <div className="flex justify-center mt-2 ">
          <button className="px-4 py-1 text-white capitalize rounded-md w-fit bg-primary">
            create
          </button>
        </div> */}
      </form>
      {/* <DevTool control={control} /> */}
    </FormProvider>
  );
};

export default ProductForm;
function getDateTwoWeeksFromNow() {
  // Get the current date
  var today = new Date();

  // Add 2 weeks to the current date
  var twoWeeksLater = new Date(today.getTime() + 2 * 7 * 24 * 60 * 60 * 1000);

  // Extract the date and time components
  var year = twoWeeksLater.getFullYear();
  var month = twoWeeksLater.getMonth() + 1; // Note: Months are zero-based
  var day = twoWeeksLater.getDate();
  var hours = twoWeeksLater.getHours();
  var minutes = twoWeeksLater.getMinutes();
  var seconds = twoWeeksLater.getSeconds();

  // Format the date and time
  var formattedDateTime =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  return twoWeeksLater;
}
