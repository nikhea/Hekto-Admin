import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";

const SubCategory = () => {
  return (
    <div>
      SubCategory
      <Link to={routes.newSubCategory}>add subcategory</Link>
    </div>
  );
};

export default SubCategory;
