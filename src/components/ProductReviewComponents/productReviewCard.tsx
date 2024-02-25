import {
  Box,
  Typography,
  Button,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Card } from "@tremor/react";
import React, { useMemo, useState } from "react";
import RatingStar from "../FormElement/RatingStar/RatingStar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ThreeDots } from "react-loader-spinner";
import { TbTrashXFilled } from "react-icons/tb";
import theme from "../../MUI/themeDefalut";
import useUpdateReviewStatus from "../../Hooks/useReview/useReviewStatus";
import useRemoveReview from "../../Hooks/useReview/useRemoveReview";
import { BsDot } from "react-icons/bs";

const ProductReviewCard = ({ reviews }: any) => {
  const [filterText, setFilterText] = useState("");

  const filteredRows = useMemo(() => {
    if (!filterText) return reviews;
    return reviews.filter(
      (row: any) =>
        row.customer.name.toLowerCase().includes(filterText.toLowerCase()) ||
        row.customer.email.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, reviews]);

  const cardItems = filteredRows.map((review: any) => (
    <Box key={review._id}>
      <ProductReviewCardItems review={review} />
    </Box>
  ));

  return (
    <Card className="flex flex-col h-full text-gray-500">
      <Typography className="!my-4 text-center capitalize  !text-2xl">
        product reviews
      </Typography>
      <ThemeProvider theme={theme}>
        <TextField
          className="!my-10  w-[80%] sm:w-[50%] "
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
      </ThemeProvider>

      <Box className="">{cardItems}</Box>
    </Card>
  );
};

export default ProductReviewCard;

const ProductReviewCardItems = ({ review }: any) => {
  const { updateReviewStatus, isLoading } = useUpdateReviewStatus();
  const { removeReview, removeReviewisLoading } = useRemoveReview();
  return (
    <Box className="h-full mb-10">
      <Box className="flex items-center gap-4 ">
        <Box>
          <LazyLoadImage
            className="w-10 h-10 ml-2 rounded-full"
            width={100}
            height={100}
            src={review.customer.image}
            alt={review.customer.name}
          />
        </Box>
        <Box className="flex items-center gap-1">
          <Typography className="!stext-[#1E1E1E] !text-[14px] sm:!text-[16px] text-black capitalize">
            {review.customer.name}
          </Typography>
          <Box className="flex items-center ">
            <BsDot />
            {review.customer.email}
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-col mx-3 md:gap-4 md:items-center md:flex-row ">
        <RatingStar value={review.rating} size={24} edit={false} />
        <Typography>{review.productName}</Typography>
      </Box>
      <Box className="mx-3 my-4 !text-[#1E1E1E] text-black capitalize">
        <Typography>{review.comment}</Typography>
      </Box>
      <Box className="flex  items-center justify-end w-full gap-3 !mr-4  ">
        <Box className="!bg-primary !rounded-md  !w-[110px]">
          <Button
            className="!text-white !rounded-md !w-full  !bg-primary hover:!bg-pink-300 !outline-1 !outline-pink-300"
            size="medium"
            disabled={isLoading}
            onClick={() => updateReviewStatus(review._id)}
          >
            {isLoading ? (
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
                {review.published ? "unpublished" : "published"}
              </Typography>
            )}
          </Button>
        </Box>
        <Box>
          <TbTrashXFilled
            className="text-center cursor-pointer hover:!text-red-500"
            color="#8392A5"
            size={20}
          />
        </Box>
      </Box>
    </Box>
  );
};

// export default ProductReviewCardItems
