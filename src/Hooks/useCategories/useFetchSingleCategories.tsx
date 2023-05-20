import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { queryKey } from "../queryKeys";
import { fetchSingleCategories } from "../../services/shared/categories";

interface IProps {
  name?: string | undefined;
}

const useFetchSingleCategories = (name: string) => {
  const { data: product } = useQuery([queryKey.products, name], () =>
    fetchSingleCategories(name)
  );

  return product;
};

export default useFetchSingleCategories;
