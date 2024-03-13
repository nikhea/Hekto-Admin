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
import useUpdateProduct from "../../Hooks/useProducts/useUpdateProduct";
import { usePhotoStore } from "../../store/usePhotosStore";
const ProductForm = ({ defaultValue, productId }: any) => {
  const { updateProduct, isLoading } = useUpdateProduct();
  const { photos, setPhotos } = usePhotoStore();

  const methods = useForm<ProductForm>({
    resolver: yupResolver(productSchema),
    mode: "onChange",
    defaultValues: defaultValue,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = methods;
  useEffect(() => {
    if (defaultValue.name) {
      setValue("category", defaultValue.category.name);
      setValue("subcategory", defaultValue.subcategory.name);
      setValue("coverPhoto", defaultValue.coverPhoto);
      setValue("features", defaultValue.features);
      setPhotos(defaultValue.photos);
    }
  }, [defaultValue, setValue]);
  const submitForm = (data: any) => {
    const productData = data;
    if (data) {
      if (defaultValue.name) {
        updateProduct(productId, productData);
      }
      // console.log(isLoading, "isLoading");
    }
  };
  // console.log(status);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-y-5">
          <ProductInformation />
          <ProductDescrption />
          <ProductImages
            productId={productId}
            // productPhotos={defaultValue.photos}
            productPhotos={photos}
            coverPhotos={defaultValue.coverPhoto}
          />
          <ProductInventory features={defaultValue.features} />
          <ProductState isLoading={isLoading} />
        </div>
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
