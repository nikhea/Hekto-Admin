import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";

const SubCategory = () => {
  return (
    <div>
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
    </div>
  );
};
const headerDetails = {
  text: " add subcategory",
  link: routes.newSubCategory,
};
export default SubCategory;
