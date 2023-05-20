import { Card } from "@tremor/react";
import React from "react";
import NewCategoryForm from "../../../src/components/NewCategory/NewCategoryForm";

const NewCategory = () => {
  return (
    <Card>
      <h1 className=" uppercase text-center"> category information</h1>
      <NewCategoryForm />
    </Card>
  );
};

export default NewCategory;
