import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Checkbox } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import usefetchAllReviews from "../../Hooks/useReview/usefetchAllReviews";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import ProductReviewTableDropDown from "./ProductReviewTableDropDown";
import { TbTrashXFilled } from "react-icons/tb";
import PageLoading from "../Loading/PageLoading";

const ProductReviewTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionModelChange = (selectionModel: any) => {
    setSelectedRows(selectionModel);
  };
  const reviews = getProductReviews();
  const columns = useMemo(
    () => [
      // {
      //   field: "checkboxSelection",
      //   headerName: "Select",
      //   width: 100,
      //   sortable: false,
      //   renderCell: (params: any) => (
      //     <Checkbox
      //       color="primary"
      //         checked={selectedRows.includes(params.row._id)}
      //     />
      //   ),
      // },
      // { field: "_id", headerName: "Review ID", width: 100 },
      { field: "customername", headerName: "Customer Name", width: 150 },
      //   { field: "lastname", headerName: "Last Name", width: 150 },
      { field: "productName", headerName: "Product Name", width: 200 },
      {
        field: "rating",
        headerName: "Rating",
        width: 200,
        renderCell: (params: any) => (
          <>
            <RatingStar value={params.row.rating} size={24} edit={false} />
          </>
        ),
      },
      { field: "comment", headerName: "Comment", width: 300 },
      {
        field: "action",
        headerName: "Published",
        width: 200,
        renderCell: (params: any) => (
          <div>
            <Button
              onClick={() => handleUpdate(params.row._id)}
              variant="outlined"
              color="secondary"
              size="small"
              //   style={{ backgroundColor: "pink" }}
            >
              {params.row.published ? "Unpublished" : "Published"}
            </Button>
          </div>
        ),
      },
      {
        field: "actions",
        headerName: "Remove",
        width: 100,
        renderCell: (params: any) => (
          <TbTrashXFilled
            className="cursor-pointer hover:text-red-500"
            // color="#8392A5"
            size={20}
            onClick={() => handleDelete(params.row._id)}
          />
        ),
      },
    ],
    []
  );

  const handleUpdate = (reviewId: any) => {
    console.log("updating review with ID:", reviewId);
  };
  const handleDelete = (reviewId: any) => {
    console.log("Deleting review with ID:", reviewId);
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
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "black",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            borderBottom: "none",
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
            color: `black !important`,
          },
        }}
      >
        <DataGrid
          density="comfortable"
          rows={reviews}
          //   components={{ Toolbar: GridToolbar }}
          getRowId={(row: any) => generateRandom()}
          columns={columns}
          checkboxSelection
          // selectionModel={selectedRows}
          // onSelectionModelChange={handleSelectionModelChange}
        />
      </Box>
    ),
    [reviews, columns]
  );

  if (!reviews) {
    return <PageLoading />;
  }

  return <Box m="20px">{gridComponent}</Box>;
};

export default ProductReviewTable;
function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
function getProductReviews() {
  const data = usefetchAllReviews();
  const reviews: any = [];
  if (data) {
    data.forEach((item: any) => {
      const review = {
        _id: item._id,
        published: item.published,
        comment: item.comment,
        rating: item.rating,
        customername: `${item.user.firstname} ${item.user.lastname}`,
        lastname: item.user.lastname,
        productName: item.product.name,
      };

      reviews.push(review);
    });
  }

  return reviews;
}
