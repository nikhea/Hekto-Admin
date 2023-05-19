import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";

const Products = () => {
  return (
    <div>
      <Link to={routes.newProduct}>add product</Link>
    </div>
  );
};

export default Products;
