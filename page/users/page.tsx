import useDeviceProperties from "../../src/Hooks/UseMediaQueries";
import { useFetchAllUser } from "../../src/Hooks/useUser/useFetchAllUser";
import PageLoading from "../../src/components/Loading/PageLoading";
import Table from "../../src/components/UsersComponents/Table";
import UserMobileCards from "../../src/components/UsersComponents/UserMobileCards";
import { formatDate } from "../../src/utils/getFullYear";

const Users = () => {
  const { isTabletOrMobile, isMobile } = useDeviceProperties();

  const { users, isLoading } = useFetchAllUser();

  if (isLoading) {
    return <PageLoading />;
  }
  const data: any = [];

  if (users) {
    users.forEach((item: any) => {
      const users = {
        id: item._id,
        image:
          item.profile?.profileImage?.thumbnail_url ||
          "https://res.cloudinary.com/djkqaqoj3/image/upload/v1686020514/cover-productImages-undefined-1686020113705/qggstfyhcspzpklr4bhl.jpg",
        first_name: item.firstname,
        last_name: item.lastname,
        email: item.email,
        date: formatDate(item.createdAt),
        country: item.shipping?.address.country || "nigeria",
        phone: item.shipping?.address.phone || "No phone number",
      };

      data.push(users);
    });
  }

  return (
    <div>
      {isTabletOrMobile ? (
        <UserMobileCards users={data} />
      ) : (
        <Table users={data} />
      )}
    </div>
  );
};

export default Users;
