import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import Button from "../../src/components/FormElement/Button/Button";
import NewCategoryModal from "../../src/components/NewCategory/NewCategoryModal";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Category = () => {
  const categories = useFetchCategories();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (!categories) {
    return <h1>loadCategories</h1>;
  }
  const displayCategories = categories.map((category: any) => (
    <div key={category._id}>
      <Link to={`${routes.updateCategory}/${category.name}`}>
        {category.name}
      </Link>
      <LazyLoadImage
        width={300}
        height={300}
        src={category.coverPhoto}
        alt={category.name}
      />
    </div>
  ));
  // `/categories/${category._id
  return (
    <div>
      Category
      <Link to={routes.newCategory}>add category</Link>
      {categories && displayCategories}
    </div>
  );
};

export default Category;
{
  /* <Button onClick={handleOpen}>Open modal</Button>
<NewCategoryModal open={open} handleClose={handleClose} /> */
}
