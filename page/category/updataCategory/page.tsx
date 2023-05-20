// @ts-nocheck

import { Card } from "@tremor/react";
import { useParams } from "react-router-dom";
import useFetchSingleCategories from "../../../src/Hooks/useCategories/useFetchSingleCategories";
import EditCategoryForm from "../../../src/components/NewCategory/EditCategoryForm";
import PageLoading from "../../../src/components/Loading/PageLoading";

interface Category {
  name: string;
  description: string;
  coverPhoto: string;
}
interface Params {
  name: string;
}
const UpdataCategory = () => {
  const { name } = useParams<{ name?: string }>();
  const category = useFetchSingleCategories(name);
  if (!category) {
    return <PageLoading />;
  }

  return (
    <Card>
      <h1 className="text-center uppercase "> update {typeof name} </h1>
      <EditCategoryForm defaultCategory={category} />
    </Card>
  );
};

export default UpdataCategory;

// const defaultCategory : Category = {
//   name: category.name,
//   description: category.description,
//   coverPhoto: category.coverPhoto,
// };
