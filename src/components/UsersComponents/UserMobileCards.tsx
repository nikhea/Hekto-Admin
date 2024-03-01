import { Box, Typography } from "@mui/material";
import { Card, Icon } from "@tremor/react";
import EllipsisVertical from "../icons/EllipsisVertical";
import PhoneIcon from "../icons/PhoneIcon";
import FlagIcon from "../icons/ FlagIcon";

const UserMobileCards = ({ users }: any) => {
  const displayUsers = users.map((user: any) => (
    <Card
      key={user.id}
      className="my-3 !text-[#111111]  rounded-2xl"
      style={{
        background: "#F4F4F4",
      }}
    >
      <Box className="flex items-center justify-between ">
        <Box className="capitalize ">
          <Typography className="  text-[16px] font-bold">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography className=" text-[#878787] text-[13px] font-bold">
            {user.email}
          </Typography>
        </Box>
        <Box>
          <Icon className=" md:block text-[#111]" icon={EllipsisVertical} />
        </Box>
      </Box>
      <Box className="flex items-center gap-4 mt-5">
        <Typography className="flex items-center">
          <Icon className=" md:block text-[#878787]" icon={PhoneIcon} />
          <span className="mx-2 !text-2xl">:</span>
          07068861569
        </Typography>
        <Typography className="flex items-center capitalize">
          <Icon className=" md:block text-[#878787]" icon={FlagIcon} />
          <span className="mx-2 !text-2xl">:</span>

          {user.country}
        </Typography>
      </Box>
    </Card>
  ));
  return <Card>{displayUsers}</Card>;
};

export default UserMobileCards;
