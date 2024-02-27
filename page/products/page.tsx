import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import ProductTable from "../../src/components/ProductTable/ProductTable";
import { useFetchAllProducts } from "../../src/Hooks/useProducts/useFetchAllProducts";
import PageLoading from "../../src/components/Loading/PageLoading";
import { useProductState } from "../../src/store/useProductStore";
import { Card } from "@tremor/react";
import ProductMobile from "../../src/components/productMobile/ProductMobil";
import useDeviceProperties from "../../src/Hooks/UseMediaQueries";

const Products = () => {
  const { isTabletOrMobile, isMobile } = useDeviceProperties();

  const products = useFetchAllProducts();
  // const products = useProductState.getState().products;

  if (!products) {
    return <PageLoading />;
  }
  return (
    <Card>
      <div className="flex justify-end">
        <Link
          to={routes.newProduct}
          className="p-2 capitalize border rounded-md hover:text-primary hover:border-primary"
        >
          add product
        </Link>
      </div>
      {isTabletOrMobile ? (
        <ProductMobile products={products} />
      ) : (
        <ProductTable products={products} />
      )}
    </Card>
  );
};

export default Products;
