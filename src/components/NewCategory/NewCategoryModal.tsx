import { Modal, Box } from "@mui/material";
import { FC } from "react";
import NewCategoryForm from "./NewCategoryForm";

export type INewCategoryModal = {
  open: boolean;
  handleClose: () => void;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  width: 700,
  hight: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const submitForm = (data: any) => {};
const NewCategoryModal: FC<INewCategoryModal> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className=" uppercase text-center"> category information</h1>
        <NewCategoryForm />
      </Box>
    </Modal>
  );
};

export default NewCategoryModal;
{
  /* <Box sx={style} className="  text-gray-600">
<Typography
  className=" capitalize"
  id="modal-modal-title"
  variant="h6"
  component="h2"
>
  category information
</Typography>
<Box className=" flex justify-center flex-col ">
  <div className=" w-full">
    <Typography> category name</Typography>
    <Input
      type="text"
      placeholder="Category Name"
      name="categoryName"
      required
      isWhiteBg
      isCurve
      Width="70%"
    />
  </div>

  <div className="">
    <Typography> category description</Typography>
    <Input
      type="text"
      placeholder="Category Name"
      name="categoryName"
      required
      isWhiteBg
      isCurve
      Width="70%"
    />
  </div>
</Box>
</Box> */
}
