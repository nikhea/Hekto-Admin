// @ts-nocheck
import { useMemo } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import mockDataContacts from "../../data/MOCK_DATA.json";
import { useFetchAllUser } from "../../Hooks/useUser/useFetchAllUser";
import { routes } from "../../routes/routes";

const OrderTable = () => {
  const users = useFetchAllUser();
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 0.5 },
      {
        field: "first_name",
        headerName: "First Name",
        flex: 1,
        cellClassName: "name-column--cell",
        renderCell: (params) => (
          <Link to={`${routes.users}/${params.row.first_name}`}>
            {params.row.first_name}
          </Link>
        ),
      },
      {
        field: "last_name",
        headerName: "Last Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "countrys",
        headerName: "Country",
        flex: 1,
      },
    ],
    []
  );
  const gridComponent = useMemo(
    () => (
      <Box
        m="40px 0 0 0"
        height="73vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "black",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            borderBottom: "none",
            border: "none",
            color: "gray",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "white",
          },
          "& .MuiCheckbox-root": {
            color: `white !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `gray !important`,
          },
        }}
      >
        <DataGrid
          density="comfortable"
          rows={mockDataContacts}
          components={{ Toolbar: GridToolbar }}
          columns={columns}
          // initialState={{
          //   pagination: { paginationModel: { pageSize: 25 } },
          // }}
          // pageSizeOptions={[25, 50, 100]}
        />
      </Box>
    ),
    [columns]
  );

  return <Box m="20px"> {gridComponent}</Box>;
};

export default OrderTable;
