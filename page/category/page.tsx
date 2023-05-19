import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import Button from "../../src/components/FormElement/Button/Button";
import NewCategoryModal from "../../src/components/NewCategory/NewCategoryModal";

const Category = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      Category
      <Button onClick={handleOpen}>Open modal</Button>
      <NewCategoryModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Category;
