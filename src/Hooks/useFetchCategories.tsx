import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/shared/categories";
import { queryKey } from "./queryKeys";

interface Props {
  initialData: any; // replace 'any' with your actual type
}

export const useFetchCategories = (props: Props) => {
  const { data: categories } = useQuery(
    [queryKey.categories],
    fetchCategories, // replace with your actual fetch function
    {
      //   initialData: props.initialData.categories,
      refetchOnMount: true,
    }
  );

  return categories;
};
