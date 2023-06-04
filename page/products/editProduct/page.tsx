//@ts-nocheck
import { useNavigate, useParams } from "react-router-dom";
import { useSingleFetchProducts } from "../../../src/Hooks/useProducts/useSingleFetchProducts";
import PageLoading from "../../../src/components/Loading/PageLoading";
import EditProductForm from "../../../src/components/EditProductForm/ProductForm";
import { Card } from "@tremor/react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import useRemoveFromProducts from "../../../src/Hooks/useProducts/useRemoveProducts";
const EditProduct = () => {
  const { name } = useParams<{ name?: string }>();
  const { removeFromProducts, removeFromProductsisLoading } =
    useRemoveFromProducts();

  const product = useSingleFetchProducts(name);
  if (!product) {
    return <PageLoading />;
  }
  const LiveView = import.meta.env.VITE_Live_View;
  const deleteProduct = async (id: string) => {
    // await removeFromProducts(id);
  };
  return (
    <div>
      <Card className="relative flex items-center justify-center mb-3">
        <h1 className="flex justify-center text-center capitalize md:text-xl">
          update - {name} {product._id}
        </h1>
        <span className="absolute flex items-center gap-3 capitalize right-3 text-end md:text-xl">
          {/* <h6 className="text-green-500">live view</h6> */}
          <Link target="_blank" to={`${LiveView}/${name}`}>
            <BsEyeFill
              className="cursor-pointer text-[#333] hover:text-green-500"
              size={20}
            />
          </Link>
          <h6
            onClick={() => deleteProduct(product.data._id)}
            className="px-2 py-1 text-red-500 rounded-md cursor-pointer hover:bg-red-100"
          >
            {removeFromProductsisLoading ? "deleting" : "delete"}
          </h6>
        </span>
      </Card>
      <EditProductForm defaultValue={product.data} />
    </div>
  );
};

export default EditProduct;
