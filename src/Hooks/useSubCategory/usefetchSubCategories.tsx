import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchSubCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const usefetchSubCategories = () => {
  const {
    data: subcategories,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery([queryKey.subcategory], fetchSubCategories, {
    getNextPageParam: (lastPage, pages) => {
      const { page, totalPages } = lastPage;
      if (page < totalPages) {
        return page + 1;
      }
      return undefined;
    },
  });

  return {
    subcategories,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};

export default usefetchSubCategories;

// const { data: subcategories } = useQuery(
//   [queryKey.subcategory],
//   fetchSubCategories
// );

// return subcategories;
// };
