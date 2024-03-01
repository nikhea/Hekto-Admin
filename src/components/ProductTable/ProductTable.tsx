import React, { useMemo } from "react";
import { Productcolumns } from "./ProductTableColumn";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import { mockDataContacts } from "../../data/mockData";
import { generateRandom } from "../../utils/generateRandomID";
import "./product.module.scss";
import theme from "../../MUI/themeDefalut";
import { Card } from "@tremor/react";
import DraggableDialog from "../FormElement/dialog/dialog";
import useDialogStore from "../../store/useDialogStore";
import useRemoveFromProducts from "../../Hooks/useProducts/useRemoveProducts";

const ProductTable = ({ products }: any) => {
  const { removeFromProducts, removeFromProductsisLoading } =
    useRemoveFromProducts();
  const { open, setOpen } = useDialogStore();
  const handleRemove = async () => {
    // await removeFromProducts(params.row._id);
    setOpen(false);
  };
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
            textTransform: "capitalize",
          },
          "& .name-column--cell": {
            color: "#333",
            textTransform: "capitalize",
            marginTop: "20px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            borderBottom: "none",
            color: "gray",
            textTransform: "capitalize",
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
          "& .MuiDataGrid-row": {
            // borderBottom: "none",
            // display: "none",
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <DataGrid
            density="comfortable"
            rows={products}
            components={{ Toolbar: GridToolbar }}
            columns={Productcolumns}
            getRowId={(row: any) => generateRandom()}
            getRowHeight={() => "auto"}
            //   initialState={{
            //     pagination: { paginationModel: { pageSize: 25 } },
            //   }}
            // pageSizeOptions={[25, 50, 100]}
          />
        </ThemeProvider>
      </Box>
    ),
    [products]
  );

  return (
    <Box m="20px">
      {gridComponent}
      <DraggableDialog
        open={open}
        handleRemove={handleRemove}
        title="product"
        isLoading={removeFromProductsisLoading}
        handleClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default ProductTable;

// const gridComponent = useMemo(
//   () => (
//     <Box
//       m="40px 0 0 0"
//       height="73vh"
//       sx={{
//         "& .MuiDataGrid-root": {
//           border: "none",
//         },
//         "& .MuiDataGrid-cell": {
//           borderBottom: "none",
//           // textTransform: "capitalize",
//         },
//         "& .name-column--cell": {
//           color: "#333",
//           textTransform: "capitalize",
//         },
//         "& .MuiDataGrid-columnHeaders": {
//           backgroundColor: "white",
//           borderBottom: "none",
//           color: "gray",
//           // textTransform: "capitalize",
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
//           color: `gray !important`,
//         },
//       }}
//     >
//       <DataGrid
//         density="comfortable"
//         rows={products}
//         components={{ Toolbar: GridToolbar }}
//         columns={Productcolumns}
//         getRowId={(row: any) => generateRandom()}
//         getRowHeight={() => "auto"}

//         //   initialState={{
//         //     pagination: { paginationModel: { pageSize: 25 } },
//         //   }}
//         //   pageSizeOptions={[25, 50, 100]}
//       />
//     </Box>
//   ),
//   [Productcolumns]
// );

// const gridComponent = (
//   <Box
//     m="40px 0 0 0"
//     height="73vh"
//     sx={{
//       "& .MuiDataGrid-root": {
//         border: "none",
//       },
//       "& .MuiDataGrid-cell": {
//         borderBottom: "none",
//         // textTransform: "capitalize",
//       },
//       "& .name-column--cell": {
//         color: "#333",
//         textTransform: "capitalize",
//       },
//       "& .MuiDataGrid-columnHeaders": {
//         backgroundColor: "white",
//         borderBottom: "none",
//         color: "gray",
//         // textTransform: "capitalize",
//       },
//       "& .MuiDataGrid-virtualScroller": {
//         backgroundColor: "white",
//       },
//       "& .MuiDataGrid-footerContainer": {
//         borderTop: "none",
//         backgroundColor: "white",
//       },
//       "& .MuiCheckbox-root": {
//         color: `white !important`,
//       },
//       "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//         color: `gray !important`,
//       },
//     }}
//   >
//     <DataGrid
//       density="comfortable"
//       rows={products}
//       components={{ Toolbar: GridToolbar }}
//       columns={Productcolumns}
//       getRowId={(row: any) => generateRandom()}
//       getRowHeight={() => "auto"}
//     />
//   </Box>
// );
