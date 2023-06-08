import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateProfileServer } from "../../services/authenticated/users";
import { queryKey } from "../queryKeys";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const UpdateProfile = useMutation(
    async (profileData: any) => {
      await updateProfileServer(profileData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.users]);
        queryClient.invalidateQueries();
      },
    }
  );

  const updateProfile = async (profileData: any) => {
    await UpdateProfile.mutateAsync({ profileData });
  };
  return {
    updateProfile,
    status: UpdateProfile.status,
    isLoading: UpdateProfile.isLoading,
    data: UpdateProfile.data,
  };
};

export default useUpdateProfile;
