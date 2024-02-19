import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Checkbox } from "@material-ui/core";
import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import usefetchAllReviews from "../../Hooks/useReview/usefetchAllReviews";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import ProductReviewTableDropDown from "./ProductReviewTableDropDown";
import { TbTrashXFilled } from "react-icons/tb";
import PageLoading from "../Loading/PageLoading";
import { generateRandom } from "../../utils/generateRandomID";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { makeStyles } from "@mui/styles";
import useUpdateReviewStatus from "../../Hooks/useReview/useReviewStatus";
import { notify } from "../../utils/notify";
import theme from "../../MUI/themeDefalut";
import { Card } from "@tremor/react";
import { ThreeDots } from "react-loader-spinner";
import useRemoveReview from "../../Hooks/useReview/useRemoveReview";

const useStyles = makeStyles((theme: any) => ({
  customButton: {
    textTransform: "lowercase",
    width: "100%",
    outline: " 1px solid pink !important",
    backgroundColor: "#FB2E86 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "pink !important",
    },
  },
}));

const ProductReviewTable = ({ reviews }: any) => {
  const [filterText, setFilterText] = useState("");
  const { updateReviewStatus, isLoading } = useUpdateReviewStatus();
  const { removeReview, removeReviewisLoading } = useRemoveReview();

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
        width: 390,
      },
      {
        field: "Actions",
        width: 230,
        type: "singleSelect",
        valueOptions: ["published", "unpublished"],
        editable: true,
        sortable: false,
        renderCell: (params: any) => {
          const [isRowLoading, setRowLoading] = useState(isLoading);
          const [isRowRemoveLoading, setisRowRemoveLoading] = useState(
            removeReviewisLoading
          );

          const handleButtonClick = async () => {
            setRowLoading(true);
            handleUpdate(params.row._id, params.id);
          };
          const handleButtonRemove = async () => {
            setisRowRemoveLoading(true);
            handleDelete(params.row._id, params.id);
          };
          return (
            <div className="flex items-center w-full gap-10 my-4">
              <Box className="w-[50%] my-4 ">
                <Button
                  size="medium"
                  className={classes.customButton}
                  disabled={isRowLoading}
                  onClick={handleButtonClick}
                >
                  {isRowLoading ? (
                    <ThreeDots
                      height="10"
                      width="30"
                      radius="9"
                      color="#FFF "
                      wrapperClass="flex text-center cursor-not-allowed py-2"
                      ariaLabel="three-dots-loading"
                      visible={true}
                    />
                  ) : (
                    <Typography className="capitalize">
                      {params.row.published ? "unpublished" : "published"}
                    </Typography>
                  )}
                </Button>
              </Box>
              <Box>
                {isRowRemoveLoading ? (
                  <ThreeDots
                    height="10"
                    width="30"
                    radius="9"
                    color="#8392A5"
                    wrapperClass="flex text-center cursor-not-allowed py-2"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                ) : (
                  <TbTrashXFilled
                    className="text-center cursor-pointer hover:text-red-500"
                    color="#8392A5"
                    size={20}
                    onClick={handleButtonRemove}
                  />
                )}
              </Box>
            </div>
          );
        },
      },
    ],
    [isLoading]
  );

  const handleUpdate = (reviewId: any, params: any) => {
    updateReviewStatus(reviewId);
  };
  const handleDelete = (reviewId: any, params: any) => {
    removeReview(reviewId);
  };
  const filteredRows = useMemo(() => {
    if (!filterText) return reviews;
    return reviews.filter(
      (row: any) =>
        row.customer.name.toLowerCase().includes(filterText.toLowerCase()) ||
        row.customer.email.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, reviews]);
  const gridComponent = useMemo(
    () => (
      <Box
        m="40px 0 0 0"
        // height="73vh"
        height="70vh"
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
            marginY: "10px",
            borderBottom: "1px solid #E0E0E0 !important",
          },
          "& .name-column--cell": {
            color: "black",
            // marginTop: "30px",
            // textTransform: "capitalize",
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
                border: "none",
                outline: "none",
                borderRadius: "14px",
              },
            }}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <DataGrid
            density="comfortable"
            rows={filteredRows}
            // rows={reviews}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row: any) => generateRandom()}
            columns={columns}
            // columns={columnsMobile}
          />
        </ThemeProvider>
      </Box>
    ),
    [reviews, columns, filterText, isLoading]
  );

  if (!reviews) {
    return <PageLoading />;
  }

  return (
    <Card className="flex justify-center h-full text-gray-500">
      <Box className="">{gridComponent}</Box>
    </Card>
  );
};

export default ProductReviewTable;
