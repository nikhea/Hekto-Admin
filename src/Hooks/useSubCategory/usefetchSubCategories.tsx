import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSubCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const usefetchSubCategories = () => {
  const { data: subcategories } = useQuery(
    [queryKey.subcategory],
    fetchSubCategories
  );

  return subcategories;
};

export default usefetchSubCategories;
