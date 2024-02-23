import React from "react";
import { Card } from "@tremor/react";
import NewSubCategoryForm from "../../../src/components/NewSubCategory/NewSubCategoryForm";
import { useFetchCategories } from "../../../src/Hooks/useCategories/useFetchCategories";
import ThemeProvider from "@mui/styles/ThemeProvider";
import theme from "../../../src/MUI/themeDefalut";

const NewSubCategory = () => {
  const categories = useFetchCategories();
  return (
    <ThemeProvider theme={theme}>
      <Card className="relative">
        <h1 className="text-center uppercase "> SubCategory information</h1>
        <NewSubCategoryForm categories={categories} />
      </Card>
    </ThemeProvider>
  );
};

export default NewSubCategory;
