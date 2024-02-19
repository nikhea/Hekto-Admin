// @ts-nocheck

import React, { useMemo, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { generateRandom } from "../../utils/generateRandomID";
import { Ordercolumns } from "./OrdersTableColumn";
import { OrdersTableData } from "./OrdersTableData";
import { Card } from "@tremor/react";
import theme from "../../MUI/themeDefalut";
import { Box, TextField, ThemeProvider } from "@mui/material";
const OrdersTable = ({ orders }: any) => {
  const [filterText, setFilterText] = useState("");
  const filteredRows = useMemo(() => {
    if (!filterText) return orders;
    return orders.filter(
      (row: any) =>
        row.customer.name.toLowerCase().includes(filterText.toLowerCase()) ||
        row.customer.email.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, orders]);

  const gridComponent = useMemo(
    () => (
      <Box
        m="40px 0 0 0"
        // height="73vh"
        // height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
            // marginTop: "30px",
          },
          "& .MuiDataGrid-row": {
            // borderBottom: "none",
            // maxHeight: "300px !important",
            // minHeight: "300px !important",
            // marginY: "10px",
            borderBottom: "1px solid #E0E0E0 !important",
          },
          "& .name-column--cell": {
            color: "#333",
            textTransform: "capitalize",
            // marginTop: "20px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            borderBottom: "none",
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
            color: `grey !important`,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <TextField
            label="filter by name or email"
            value={filterText}
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: "14px",
              },
            }}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <DataGrid
            density="comfortable"
            rows={filteredRows}
            rowHeight={70}
            components={{ Toolbar: GridToolbar }}
            columns={Ordercolumns}
            getRowId={(row: any) => generateRandom()}
          />
        </ThemeProvider>
      </Box>
    ),
    [Ordercolumns, filterText]
  );

  return (
    <Card>
      <Box> {gridComponent}</Box>
    </Card>
  );
};

export default OrdersTable;
