import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { status, getStatusBackground, getStatusColor } from "./Status";
import useUpdateOrderStatus from "../../Hooks/useOrder/useOrderStatus";

export const Ordercolumns = [
  {
    field: " name",
    width: 300,
    headerName: "Customer ",
    cellClassName: "name-column--cell",
    headerAlign: "center",
    renderCell: (params: any) => {
      const splitNameEmail = params.row.name.split(" ");
      const name = splitNameEmail[0];
      const email = splitNameEmail[1];

      return (
        <Box className="flex flex-row items-center justify-center h-full ">
          <div className="w-full rounded-full">
            <LazyLoadImage
              className="w-10 h-10 rounded-full "
              width={100}
              height={100}
              src={params.row.image}
              alt={params.row.name}
            />
          </div>
          <Box className="flex flex-col items-start justify-start ml-5 -gap-1">
            <Typography className="text-gray-500 ">{name}</Typography>
            <Typography className="!text-sm text-gray-400 ">{email}</Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    field: "shippingAddress",
    headerName: "Shipping Address",
    cellClassName: "name-column--cell",
    headerAlign: "center",
    width: 350,
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    cellClassName: "name-column--cell",
    headerAlign: "start",

    renderCell: (params: any) => (
      <span className="w-full text-red-500 uppercase">{params.row.time}</span>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    cellClassName: "name-column--cell",
    headerAlign: "start",
    width: 130,
    renderCell: (params: any) => (
      <span className="w-full uppercase">{params.row.date}</span>
    ),
  },
  {
    field: "totalItem",
    headerName: "Total Item",
    cellClassName: "name-column--cell",
    headerAlign: "start",
    width: 130,
  },
  {
    field: "total",
    headerName: "Total Amount",
    cellClassName: "name-column--cell",
    headerAlign: "start",
    width: 200,
    renderCell: (params: any) => (
      <span className="w-full uppercase">$ {params.row.total}</span>
    ),
  },
  {
    field: "action",
    headerName: "Delivery Status",
    flex: 1,
    headerAlign: "center",
    cellClassName: "name-column--cell",
    renderCell: (params: any) => {
      const [value, setValue] = useState(params.row.deliveryStatus);

      const { updateReviewStatus, isLoading } = useUpdateOrderStatus();

      const onSelectChange = (e: any) => {
        setValue(e.target.value);
        updateReviewStatus(params.row._id, e.target.value);
      };
      return (
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
            " .MuiSelect-icon.MuiSelect-iconOutlined.css-3qbkez-MuiSelect-icon:focus":
              {
                right: "20px !important",
                borderColor: "transparent !important",
              },
            " .MuiSelect-icon": {
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
      );
    },
  },
];
