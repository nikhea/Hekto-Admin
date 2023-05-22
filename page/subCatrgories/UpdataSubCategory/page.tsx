// @ts-nocheck
import { Card } from "@tremor/react";
import { useParams } from "react-router-dom";
import EditSubCategoryForm from "../../../src/components/NewSubCategory/EditSubCategoryForm";
import usefetchSingleSubCategories from "../../../src/Hooks/useSubCategory/usefetchSingleSubCategories";
import PageLoading from "../../../src/components/Loading/PageLoading";
import { useFetchCategories } from "../../../src/Hooks/useCategories/useFetchCategories";

const UpdataSubCategory = () => {
  const { name } = useParams<{ name?: string }>();
  const categories = useFetchCategories();

  const subcategory = usefetchSingleSubCategories(name);
  if (!subcategory) {
    return <PageLoading />;
  }

  return (
    <Card>
      <h1 className="text-center uppercase "> update {name} subcategory </h1>
      <EditSubCategoryForm
        defaultCategory={subcategory}
        categories={categories}
      />
    </Card>
  );
};

export default UpdataSubCategory;
