import React from "react";
import { Card } from "@tremor/react";
import NewSubCategoryForm from "../../../src/components/NewSubCategory/NewSubCategoryForm";
import { useFetchCategories } from "../../../src/Hooks/useCategories/useFetchCategories";

const NewSubCategory = () => {
  const categories = useFetchCategories();
  return (
    <Card>
      <h1 className="text-center uppercase "> SubCategory information</h1>
      <NewSubCategoryForm categories={categories} />
    </Card>
  );
};

export default NewSubCategory;
