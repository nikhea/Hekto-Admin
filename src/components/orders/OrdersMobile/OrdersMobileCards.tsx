import { Box, TextField, ThemeProvider, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import theme from "../../../MUI/themeDefalut";
import { Card, Icon, SelectBox, SelectBoxItem } from "@tremor/react";
import { BsDot } from "react-icons/bs";
import DollarIcon from "../../icons/DollarIcon";
import ClockIcon from "../../icons/ClockIcon";
import BagIcon from "../../icons/BagIcon";
import LocationIcon from "../../icons/LocationIcon";
import useUpdateOrderStatus from "../../../Hooks/useOrder/useOrderStatus";
import { ThreeDots } from "react-loader-spinner";
import { FaAngleDown } from "react-icons/fa";
import { MenuItem, Select } from "@mui/material";
import {
  status,
  getStatusBackground,
  getStatusColor,
} from "../../OrdersTable/Status";

const OrdersMobileCards = ({ orders }: any) => {
  const [filterText, setFilterText] = useState("");

  const filteredRows = useMemo(() => {
    if (!filterText) return orders;
    return orders.filter(
      (row: any) =>
        row.customer.name.toLowerCase().includes(filterText.toLowerCase()) ||
        row.customer.email.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, orders]);

  const cardItems = filteredRows.map((order: any) => (
    <Box key={order._id}>
      <OrderCardItems order={order} />
    </Box>
  ));
  return (
    <div className="!space-y-5 ">
      <Typography className="!text-3xl capitalize ">orders history</Typography>
      <ThemeProvider theme={theme}>
        <TextField
          className="  w-[80%] sm:w-[50%] "
          label="filter by name or email"
          value={filterText}
          InputProps={{
            disableUnderline: true,
            style: {
              border: "none",
              outline: "none",
              borderRadius: "14px",
            },
          }}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </ThemeProvider>

      <Box className="">{cardItems}</Box>
    </div>
  );
};

export default OrdersMobileCards;

const OrderCardItems = ({ order }: any) => {
  const [value, setValue] = useState(order.deliveryStatus);

  const { updateReviewStatus, isLoading } = useUpdateOrderStatus();
  const onSelectChange = (e: any) => {
    setValue(e.target.value);
    updateReviewStatus(order._id, e.target.value);
  };
  return (
    <Card className="my-4 ">
      <style>
        {`
          .tremor-SelectBox-root {
            //  background: ${getStatusBackground(value)} !important;
            // color: ${getStatusColor(value)} !important;
          }
        `}
      </style>

      <Box className="flex flex-col items-center justify-between md:flex-row">
        <Box className="w-[100%]">
          <Box className="flex items-center gap-1 ">
            <Typography className="!stext-[#1E1E1E] !text-[14px] sm:!text-[16px]  capitalize">
              {order.customer.name}
            </Typography>
            <Box className="flex items-center text-[#878787] ">
              <BsDot />
              {order.date}
            </Box>
          </Box>
        </Box>
        <Box className="!cursor-pointer w-full  md:w-fit">
          {isLoading ? (
            <Box className="flex w-[20%] justify-center text-center ">
              <ThreeDots
                height="10"
                width="30"
                radius="9"
                color="#111111"
                wrapperClass="flex text-center  cursor-not-allowed py-2"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </Box>
          ) : (
            <Box className="flex justify-end my-2 w-[50%] md:w-full">
              <Select
                value={value}
                onChange={onSelectChange}
                IconComponent={FaAngleDown}
                id="custom-select"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent !important",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent !important",
                      boxShadow: "none !important",
                    },
                  "& .MuiSelect-select": {
                    padding: "10px !important",
                  },
                  "& .MuiMenu-paper": {
                    marginTop: "8px !important",
                  },
                  "& .MuiSelect-icon.MuiSelect-iconOutlined.css-3qbkez-MuiSelect-icon":
                    {
                      right: "20px !important",
                      borderColor: "transparent !important",
                    },
                  ".MuiSelect-icon.MuiSelect-iconOutlined.css-3qbkez-MuiSelect-icon:focus":
                    {
                      right: "20px !important",
                      borderColor: "transparent !important",
                    },
                  ".MuiSelect-icon": {
                    right: "20px !important",
                  },
                }}
                style={{
                  width: "100%",
                  height: "50%",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                  paddingRight: "40px",
                  background: `${getStatusBackground(value)}`,
                  color: `${getStatusColor(value)}`,
                }}
              >
                {Object.values(status).map((statusValue) => (
                  <MenuItem key={statusValue} value={statusValue}>
                    {statusValue}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        </Box>
      </Box>

      <Box>
        <Typography className="text-[#878787]">
          {order.customer.email}
        </Typography>
      </Box>
      <Box className="flex flex-col md:flex-row md:items-center justify-between text-[#878787] mt-3">
        <Box className="flex items-center gap-2 !text-[1px]">
          <Box className="flex gap-1 itemsr-center">
            <BagIcon /> :
            <Typography className="text-[#111]">{order.totalItem}</Typography>
          </Box>
          <Box className="flex items-center">
            <DollarIcon /> :
            <Typography className="text-[#111]">{order.total}</Typography>
          </Box>
          <Box className="flex items-center">
            <ClockIcon /> :
            <Typography className="text-[#111]">{order.time}</Typography>
          </Box>
        </Box>
        <Box className="flex items-center mt-2 cursor-pointer md:mt-0">
          <Icon
            className="hidden md:block"
            icon={LocationIcon}
            tooltip={order.shippingAddress}
          />
          <p className="text-[10px] md:hidden">{order.shippingAddress}</p>
        </Box>
      </Box>
    </Card>
  );
};
{
  /* <SelectBox
value={value}
onValueChange={onSelectChange}
className="w-full !capitalize"
style={{
  width: "20%",
  height: "50%",
  // background: `${getStatusBackground(value)}`,
  // color: `${getStatusColor(value)}`,
}}
>
{Object.values(status).map((statusValue) => (
  <SelectBoxItem key={statusValue} value={statusValue}>
    {statusValue}
  </SelectBoxItem>
))}
</SelectBox> */
}
