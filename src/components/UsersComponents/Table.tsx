// @ts-nocheck
import { useMemo } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import mockDataContacts from "../../data/MOCK_DATA.json";
import { routes } from "../../routes/routes";
import { Card } from "@tremor/react";
import theme from "../../MUI/themeDefalut";
import { ThemeProvider } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Users = ({ users }: any) => {
  const columns = useMemo(
    () => [
      {
        field: "Image",
        flex: 0.5,
        headerName: "image",
        cellClassName: "name-column--cell",
        renderCell: (params: any) => {
          return (
            <LazyLoadImage
              className="w-10 h-10 rounded-full "
              width={100}
              height={100}
              src={params.row.image}
              alt={params.row.first_name}
            />
          );
        },
      },
      {
        field: "first_name",
        headerName: "First Name",
        flex: 1,
        cellClassName: "name-column--cell",
        renderCell: (params) => (
          <Link to={`${routes.customers}/${params.row.first_name}`}>
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
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },

      {
        field: "country",
        headerName: "Country",
        flex: 1,
      },
      {
        field: "date",
        headerName: "Date",
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
            borderBottom: "none !important",
            borderBottom: "none",
            textTransform: "capitalize",
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
        <ThemeProvider theme={theme}>
          <DataGrid
            density="comfortable"
            rows={users}
            components={{ Toolbar: GridToolbar }}
            columns={columns}
            rowHeight={60} // Adjust row height as needed

            // initialState={{
            //   pagination: { paginationModel: { pageSize: 25 } },
            // }}
            // pageSizeOptions={[25, 50, 100]}
          />
        </ThemeProvider>
      </Box>
    ),
    [columns]
  );

  return (
    <Card>
      <Box m="20px"> {gridComponent}</Box>
    </Card>
  );
};

export default Users;

// const columns = [
//   { field: "id", headerName: "ID", flex: 0.5 },
//   {
//     field: "first_name",
//     headerName: "First Name",
//     flex: 1,
//     cellClassName: "name-column--cell",
//   },
//   {
//     field: "last_name",
//     headerName: "Last Name",
//     flex: 1,
//     cellClassName: "name-column--cell",
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     headerAlign: "left",
//     align: "left",
//   },
//   {
//     field: "phone",
//     headerName: "Phone Number",
//     flex: 1,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     flex: 1,
//   },
//   {
//     field: "countrys",
//     headerName: "Country",
//     flex: 1,
//   },
// ];

// return (
//   <Box m="20px">
//     {/* <Header
//       title="CONTACTS"
//       subtitle="List of Contacts for Future Reference"
//     /> */}
//     <Box
//       m="40px 0 0 0"
//       height="73vh"
//       sx={{
//         "& .MuiDataGrid-root": {
//           border: "none",
//         },
//         "& .MuiDataGrid-cell": {
//           borderBottom: "none",
//         },
//         "& .name-column--cell": {
//           color: "black",
//         },
//         "& .MuiDataGrid-columnHeaders": {
//           backgroundColor: "white",
//           borderBottom: "none",
//         },
//         "& .MuiDataGrid-virtualScroller": {
//           backgroundColor: "white",
//         },
//         "& .MuiDataGrid-footerContainer": {
//           borderTop: "none",
//           backgroundColor: "white",
//         },
//         "& .MuiCheckbox-root": {
//           color: `white !important`,
//         },
//         "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//           color: `black !important`,
//         },
//       }}
//     >
//       <DataGrid
//         density="comfortable"
//         rows={mockDataContacts}
//         components={{ Toolbar: GridToolbar }}
//         columns={columns}
//       />
//     </Box>
//   </Box>
// );
