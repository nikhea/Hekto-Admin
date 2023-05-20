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
      <Link to={routes.newProduct}>add product</Link>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
