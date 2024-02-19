import { Box, Select, Typography } from "@mui/material";
import { MenuItem } from "rc-menu";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const statusState = ["pending", "processing", "shipped", "delivered"];

export const Ordercolumns = [
  {
    field: " name",
    width: 300,
    headerName: "customer ",
    // flex: 1,
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
    headerName: "shipping address",
    // flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
    width: 350,
  },
  {
    field: "time",
    headerName: "time",
    width: 130,
    // flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "start",

    renderCell: (params: any) => (
      <span className="w-full text-red-500 uppercase">{params.row.time}</span>
    ),
  },
  {
    field: "date",
    headerName: "date",
    // flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "start",
    // width: 150,
    width: 130,

    renderCell: (params: any) => (
      <span className="w-full uppercase">{params.row.date}</span>
    ),
  },
  {
    field: "totalItem",
    headerName: "total item",
    // flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "start",
    width: 130,
  },
  {
    field: "total",
    headerName: "total amount",
    // flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "start",
    width: 200,
    renderCell: (params: any) => (
      <span className="w-full uppercase">$ {params.row.total}</span>
    ),
  },
  // {
  //   field: "deliveryStatus",
  //   headerName: "delivery",
  //   // flex: 1,
  //   cellClassName: "name-column--cell",
  //   headerAlign: "start",
  //   width: 100,
  // },
  // {
  //   field: "status",
  //   headerName: "status",
  //   flex: 1,
  //   cellClassName: "name-column--cell",
  //   headerAlign: "center",
  // },
  {
    field: "action",
    headerName: "status",
    flex: 1,
    // width: "70%",
    headerAlign: "center",
    cellClassName: "name-column--cell",
    renderCell: (params: any) => {
      const status = params.row.status;
      const [selectedStatus, setSelectedStatus] = useState(status);

      const handleStatusChange = (event: any) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);
      };

      let statusStyle;
      switch (status) {
        case "pending":
          statusStyle = "text-yellow-500 bg-yellow-100";
          break;
        case "processing":
          statusStyle = "text-blue-500 bg-blue-100";
          break;
        case "shipped":
          statusStyle = "text-green-500 bg-green-100";
          break;
        case "delivered":
          statusStyle = "text-gray-500 bg-gray-100";
          break;
        default:
          statusStyle = "text-gray-500 bg-gray-100";
      }

      return (
        <div className="flex items-center w-[100%] !text-xs border-none">
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            className={`${statusStyle} rounded-[25px]`}
            IconComponent={FaAngleDown}
            style={{
              width: "100%",
              borderRadius: "10px",
              outline: "none",
              border: "none",
              padding: 0,
            }}
          >
            {statusState.map((state: any, i: number) => (
              <div key={i}> {state}</div>
            ))}
          </Select>
        </div>
      );
    },
  },
];
{
  /* <MenuItem key={i} value={state}> */
}
//  </MenuItem>
