import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import ProductTable from "../../src/components/ProductTable/ProductTable";
import { useFetchAllProducts } from "../../src/Hooks/useProducts/useFetchAllProducts";
import PageLoading from "../../src/components/Loading/PageLoading";

const Products = () => {
  const products = useFetchAllProducts();
  if (!products) {
    return <PageLoading />;
  }
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to={routes.newProduct}
          className="p-2 capitalize border rounded-md hover:border-primary"
        >
          add product
        </Link>
      </div>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
