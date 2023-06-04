const OrdersTable = () => {
  return <div>OrdersTable</div>;
};

export default OrdersTable;
// import React, { useMemo } from "react";
// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { generateRandom } from "../../utils/generateRandomID";
// import { Ordercolumns } from "./OrdersTableColumn";
// import { OrdersTableData } from "./OrdersTableData";

// const OrdersTable = () => {
//   const gridComponent = useMemo(
//     () => (
//       <Box
//         m="40px 0 0 0"
//         height="73vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//             // textTransform: "capitalize",
//           },
//           "& .MuiDataGrid-row": {
//             justifyContent: "center",
//             "& .MuiDataGrid-cell": {
//               textAlign: "center",
//             },
//           },
//           "& .name-column--cell": {
//             color: "#333",
//             textTransform: "capitalize",
//             width: "100%",
//             // textAlign: "center",
//           },
//           ".MuiDataGrid-cellContent": {
//             width: "100%",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: "white",
//             borderBottom: "none",
//             color: "gray",
//             textTransform: "capitalize",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: "white",
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: "white",
//           },
//           "& .MuiCheckbox-root": {
//             color: `white !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `gray !important`,
//           },
//         }}
//       >
//         <DataGrid
//           density="comfortable"
//           rows={OrdersTableData}
//           components={{ Toolbar: GridToolbar }}
//           columns={Ordercolumns}
//           getRowId={(row: any) => generateRandom()}
//         />
//       </Box>
//     ),
//     [Ordercolumns]
//   );

//   return <Box m="20px"> {gridComponent}</Box>;
// };

// export default OrdersTable;
