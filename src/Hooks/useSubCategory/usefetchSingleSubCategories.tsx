import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSubSingleCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const usefetchSingleSubCategories = (name: string) => {
  const { data: subcategory } = useQuery([queryKey.subcategory, name], () =>
    fetchSubSingleCategories(name)
  );

  return subcategory;
};

export default usefetchSingleSubCategories;
