import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Select, MenuItem } from "@mui/material";

const statusState = ["pending", "processing", "shipped", "delivered"];
export const Ordercolumns = [
  {
    field: "orderID",
    headerName: "order ID",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "name",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "time",
    headerName: "time",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
    renderCell: (params: any) => (
      <span className="w-full text-red-500 uppercase">{params.value}</span>
    ),
  },
  {
    field: "date",
    headerName: "date",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "product",
    headerName: "product",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "quantity",
    headerName: "quantity",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "price",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
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
            {statusState.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </div>
      );
    },
  },
];
