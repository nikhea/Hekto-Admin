import { useQuery } from "@tanstack/react-query";
import { fetchAllUser } from "../../services/authenticated/users";
import { queryKey } from "../queryKeys";

export const useFetchAllUser = () => {
  const { data: users, isLoading } = useQuery([queryKey.users], () =>
    fetchAllUser()
  );

  return { users, isLoading };
};
