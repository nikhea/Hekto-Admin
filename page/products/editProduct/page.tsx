//@ts-nocheck
import { useParams } from "react-router-dom";
import { useSingleFetchProducts } from "../../../src/Hooks/useProducts/useSingleFetchProducts";
import PageLoading from "../../../src/components/Loading/PageLoading";
import EditProductForm from "../../../src/components/EditProductForm/ProductForm";
import { Card } from "@tremor/react";

const EditProduct = () => {
  const { name } = useParams<{ name?: string }>();
  const product = useSingleFetchProducts(name);
  if (!product) {
    return <PageLoading />;
  }
  return (
    <div>
      <Card className="md:text-xl text-center capitalize mb-3">
        update - {name}
      </Card>
      <EditProductForm defaultValue={product.data} />
    </div>
  );
};

export default EditProduct;
