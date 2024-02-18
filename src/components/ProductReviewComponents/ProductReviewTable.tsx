import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Checkbox } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import usefetchAllReviews from "../../Hooks/useReview/usefetchAllReviews";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import ProductReviewTableDropDown from "./ProductReviewTableDropDown";
import { TbTrashXFilled } from "react-icons/tb";
import PageLoading from "../Loading/PageLoading";
import { generateRandom } from "../../utils/generateRandomID";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  customButton: {
    backgroundColor: "purple", // Your custom color here
    color: "white", // Text color
    "&:hover": {
      backgroundColor: "darkpurple", // Change color on hover
    },
  },
}));

const ProductReviewTable = ({ reviews }: any) => {
  const classes = useStyles();

  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionModelChange = (selectionModel: any) => {
    setSelectedRows(selectionModel);
  };

  const columns = useMemo(
    () => [
      {
        field: "customer",
        headerName: "customer",
        sortable: false,
        width: 300,
        renderCell: (params: any) => (
          <div className="flex flex-row w-full ">
            <Box>
              <LazyLoadImage
                className="w-10 h-10 ml-2 rounded-full"
                width={100}
                height={100}
                src={params.row.customer.image}
                alt={params.row.customer.name}
              />
            </Box>
            <Box className="flex flex-col w-full ml-5 ">
              <Typography className="text-gray-500 ">
                {params.row.customer.name}
              </Typography>
              <Typography className="!text-sm text-gray-400 ">
                {params.row.customer.email}
              </Typography>
            </Box>
          </div>
        ),
      },

      {
        field: "productName",
        headerName: "Product Name",
        width: 350,
      },
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
      {
        field: "comment",
        headerName: "Comment",
        width: 400,
      },
      {
        field: "action",
        headerName: "Published",
        width: 130,
        type: "singleSelect",
        valueOptions: ["Published", "Unpublished"],
        editable: true,
        sortable: false,
        renderCell: (params: any) => (
          <div>
            <Button
              onClick={() => handleUpdate(params.row._id)}
              variant="outlined"
              // color="secondary"
              size="small"
              className={classes.customButton}
            >
              {params.row.published ? "Unpublished" : "Published"}
            </Button>
          </div>
        ),
      },
      {
        field: "actions",
        headerName: "Remove",
        sortable: false,
        width: 100,
        renderCell: (params: any) => (
          <TbTrashXFilled
            className="text-center cursor-pointer hover:text-red-500"
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
            marginTop: "30px",
            textTransform: "capitalize",
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
            color: `black !important`,
          },
        }}
      >
        <DataGrid
          density="comfortable"
          rows={reviews}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row: any) => generateRandom()}
          columns={columns}
          // checkboxSelection
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

  return (
    <Box m="20px" className="text-gray-500">
      {gridComponent}
    </Box>
  );
};

export default ProductReviewTable;

// function getProductReviews() {
//   const data = usefetchAllReviews();
//   const reviews: any = [];
//   if (data) {
//     data.forEach((item: any) => {
//       const review = {
//         _id: item._id,
//         published: item.published,
//         comment: item.comment,
//         rating: item.rating,
//         customername: `${item.user.firstname} ${item.user.lastname}`,
//         lastname: item.user.lastname,
//         productName: item.product.name,
//       };

//       reviews.push(review);
//     });
//   }

//   return reviews;
// }
