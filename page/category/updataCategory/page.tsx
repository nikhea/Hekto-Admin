// @ts-nocheck

import { Card } from "@tremor/react";
import { useParams } from "react-router-dom";
import useFetchSingleCategories from "../../../src/Hooks/useCategories/useFetchSingleCategories";
import EditCategoryForm from "../../../src/components/NewCategory/EditCategoryForm";

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
  console.log(name);

  const category = useFetchSingleCategories(name);
  if (!category) {
    return <h1>loadCategories</h1>;
  }

  return (
    <Card>
      <h1 className=" uppercase text-center"> update {typeof name} </h1>
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
