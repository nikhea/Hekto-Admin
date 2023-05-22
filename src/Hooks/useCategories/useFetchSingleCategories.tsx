import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { queryKey } from "../queryKeys";
import { fetchSingleCategories } from "../../services/shared/categories";

interface IProps {
  name?: string | undefined;
}

const useFetchSingleCategories = (name: string) => {
  const { data: Category } = useQuery([queryKey.categories, name], () =>
    fetchSingleCategories(name)
  );

  return Category;
};

export default useFetchSingleCategories;
