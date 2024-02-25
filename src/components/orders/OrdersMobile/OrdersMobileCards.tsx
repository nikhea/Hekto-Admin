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
    setValue(e);
    updateReviewStatus(order._id, e);
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

      <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-1">
          <Typography className="!stext-[#1E1E1E] !text-[14px] sm:!text-[16px]  capitalize">
            {order.customer.name}
          </Typography>
          <Box className="flex items-center text-[#878787] ">
            <BsDot />
            {order.date}
          </Box>
        </Box>
        <Box className="   !cursor-pointer">
          {isLoading ? (
            <Box className="flex w-[20%] justify-center text-center ">
              <ThreeDots
                height="10"
                width="30"
                radius="9"
                color="#111111 "
                wrapperClass="flex text-center  cursor-not-allowed py-2"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </Box>
          ) : (
            <Box className="flex justify-end ">
              <SelectBox
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
              </SelectBox>
            </Box>
          )}
        </Box>
      </Box>

      <Box>
        <Typography className="text-[#878787]">
          {order.customer.email}
        </Typography>
      </Box>
      <Box className="flex items-center justify-between text-[#878787] mt-3">
        <Box className="flex items-center gap-2">
          <Box className="flex items-center gap-1">
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
        <Box className="cursor-pointer ">
          <Icon icon={LocationIcon} tooltip={order.shippingAddress} />
        </Box>
      </Box>
    </Card>
  );
};
