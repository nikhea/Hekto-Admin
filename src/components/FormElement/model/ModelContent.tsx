import { Box, Button, TextField, Typography } from "@mui/material";
import { Divider } from "@tremor/react";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowPathIcon from "../../icons/ArrowPathIcon";
import CloseIcon from "../../icons/CloseIcon";

interface BasicModalProps {
  handleClose: () => void;
  data?: any;
  onInputChange: (value: string) => void;
  titleText: string;
  subTitleText: string;
  btnText: string;
  searchText: string;
}

const ModelContent: React.FC<BasicModalProps> = ({
  onInputChange,
  handleClose,
  data,
  titleText,
  subTitleText,
  btnText,
  searchText,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSelect = (name: string) => {
    onInputChange(name);
    handleClose();
  };
  const onClose = () => {
    handleClose();
  };

  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReset = () => {
    setSearchQuery("");
  };
  const dataContent = filteredData.map((data: any, i: number) => (
    <div key={data._id} className="flex justify-between my-10 !capitalize">
      <Box className="hidden w-20 h-20 lg:block ">
        <LazyLoadImage
          className="w-20 h-20 ml-2 rounded-[10px] object-cover
          "
          width={100}
          height={100}
          src={data.photo.secure_url}
          alt={data.name}
        />
      </Box>
      <Typography>{data.name}</Typography>
      <Button
        onClick={() => onSelect(data.name)}
        className=" !bg-primary !capitalize !mr-2 w-fit h-fit !text-white !rounded-[14px]"
      >
        {btnText}
      </Button>
    </div>
  ));
  return (
    <div className="w-full">
      <Box className="flex justify-between px-10 ">
        <Box className="flex flex-col justify-start ">
          <Typography className=" md:!text-lg lg:!text-2xl capitalize text-[#202020]">
            {titleText}
          </Typography>
          <Typography className="text-[#4E4E4E] !text-[12px] md:text-sm lg:!text-lg">
            {subTitleText}
          </Typography>
        </Box>
        <Button className="!rounded-[14px]" onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Divider />
      <Box className="flex justify-between px-10 ">
        <TextField
          label={searchText}
          className=" lg:w-[50%]"
          InputProps={{
            disableUnderline: true,
            style: {
              border: "none",
              outline: "none",
              borderRadius: "14px",
            },
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className=" !capitalize w-[10%] flex-col !bg-primary !text-white !rounded-[14px]">
          <Box
            onClick={handleReset}
            className="flex flex-row items-center justify-between w-[85%] h-full "
          >
            <ArrowPathIcon /> <p className="mt-1">reset</p>
          </Box>
        </Button>
      </Box>
      <Box className="px-10">
        <Box className=" overflow-auto w-full capitalize !text-[#202020] flex justify-between px-5 py-5 rounded-[14px]  !bg-pink-100  my-5 ">
          <Typography className="hidden lg:block">image</Typography>
          <Typography>name</Typography>
          <Typography>action</Typography>
        </Box>
        <Box className=" overflow-auto w-full h-[500px]  ">{dataContent}</Box>
      </Box>
    </div>
  );
};

export default ModelContent;
