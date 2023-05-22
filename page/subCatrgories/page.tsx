import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import usefetchSubCategories from "../../src/Hooks/useSubCategory/usefetchSubCategories";
import PageLoading from "../../src/components/Loading/PageLoading";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";

const SubCategory = () => {
  const categories = useFetchCategories();
  const subcategories = usefetchSubCategories();

  if (!subcategories) {
    return <PageLoading />;
  }
  const displaySubcategories = subcategories.map((subcategory: any) => (
    <div key={subcategory._id}>
      <Link to={`${routes.updateSubCategory}/${subcategory.name}`}>
        {subcategory.name}
      </Link>
    </div>
  ));
  return (
    <div>
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
      {displaySubcategories}
    </div>
  );
};
const headerDetails = {
  text: " add subcategory",
  link: routes.newSubCategory,
};
export default SubCategory;
