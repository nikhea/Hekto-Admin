import { Box, TextField, ThemeProvider, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import theme from "../../MUI/themeDefalut";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon, ProgressBar } from "@tremor/react";
import { TbTrashXFilled } from "react-icons/tb";
// import { StopIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { routes } from "../../routes/routes";
import StopIcon from "../icons/StopIcon";
const LiveView = import.meta.env.VITE_Live_View;

const ProductMobile = ({ products }: any) => {
  const [filterText, setFilterText] = useState("");

  const filteredRows = useMemo(() => {
    if (!filterText) return products;
    return products.filter((product: any) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, products]);

  const cardItems = filteredRows.map((product: any) => (
    <Box key={product._id}>
      <ProductCardItems product={product} />
    </Box>
  ));
  return (
    <div className="!space-y-10 ">
      <Typography className="!text-3xl capitalize ">products</Typography>
      <ThemeProvider theme={theme}>
        <TextField
          className="  w-[80%] sm:w-[50%] "
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

      <Box className="!mt-5 ">{cardItems}</Box>
    </div>
  );
};

export default ProductMobile;

const ProductCardItems = ({ product }: any) => {
  let statusStyle;

  const getStyle = () => {
    switch (product.status) {
      case "in stock":
        statusStyle = " text-green-500  ";
        break;
      case "being restocked":
        statusStyle = "text-blue-500 ";
        break;
      case "out of stock":
        statusStyle = "text-yellow-500 ";
        break;
      case "delivered":
        statusStyle = "text-gray-500 bg-gray-100 ";
        break;
      default:
        statusStyle = "text-gray-500 bg-gray-100";
    }
  };
  getStyle();
  return (
    <Box className="grid w-full grid-cols-2 gap-5 ">
      <Box className="mb-5 rounded-md !w-25 !h-25 relative ">
        <Box className="absolute inset-0 bg-black rounded-md opacity-50 cursor-pointer"></Box>

        <LazyLoadImage
          width={100}
          height={100}
          src={product.coverPhoto}
          alt={product.coverPhoto}
          className="object-cover w-full h-full rounded-md "
        />
        <Box className="absolute right-3 top-3">
          <Link target="_blank" to={`${LiveView}${product.slug}`}>
            <BsEyeFill
              className="text-white cursor-pointer hover:text-primary"
              size={20}
            />
          </Link>
        </Box>
      </Box>
      <Box className="flex flex-col h-full space-y-5">
        <Link
          className=" hover:!text-primary"
          to={`${routes.EditProduct}/${product.slug}`}
        >
          <Typography className=" text-[#2D2D2D] hover:!text-primary md:!text-xl">
            {product.name}
          </Typography>
        </Link>
        <Box className="flex space-x-2 uppercase text-[#9C9C9C] md:!text-2xl">
          <Typography>{product.categoryName},</Typography>
          <Typography>{product.subcategoryName}</Typography>
        </Box>
        <Box className="flex items-center justify-between gap-0">
          <Typography className="flex items-center justify-between gap-0">
            <span className="text-[#5A5A5A]">$</span>
            <span className="text-[#111111] md:!text-2xl font-bold">
              {" "}
              {product.price}
            </span>
          </Typography>
          <Typography>
            <TbTrashXFilled
              className="text-[#5A5A5A] cursor-pointer hover:text-red-500"
              size={25}
              //   onClick={handleDeleteProduct}
            />
          </Typography>
        </Box>
        <Box>
          <Typography className="text-[#5A5A5A] md:!text-lg">
            {product.quantity} items left
          </Typography>
          <ProgressBar percentageValue={product.quantity} className="mt-2" />
        </Box>
        <Typography className="flex items-center">
          <Icon
            icon={StopIcon}
            className={` rounded-full  ${statusStyle}
            text-[10px]`}
            // variant="solid"
            style={{
              fontSize: "10px",
            }}
            // tooltip="Sum of Products"
          />
          {product.status}
        </Typography>
      </Box>
    </Box>
  );
};
