import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import Button from "../../src/components/FormElement/Button/Button";
import NewCategoryModal from "../../src/components/NewCategory/NewCategoryModal";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageLoading from "../../src/components/Loading/PageLoading";
import { Card } from "@tremor/react";
import { FaStore } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import useDeviceProperties from "../../src/Hooks/UseMediaQueries";

const Category = () => {
  const { isTabletOrMobile } = useDeviceProperties();
  const categories = useFetchCategories();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!categories) {
    return <PageLoading />;
  }
  const displayCategories = categories.map((category: any) => (
    <div
      className={`flex mt-5 w-full cursor-pointer group ${
        !isTabletOrMobile && "justify-center"
      }`}
      key={category._id}
    >
      <Link
        to={`${routes.updateCategory}/${category.name}`}
        style={{ width: "50%", height: "250px", borderRadius: "10px" }}
      >
        <LazyLoadImage
          style={{ borderRadius: "10px" }}
          className="flex object-cover w-full h-full rounded-2xl"
          src={category.coverPhoto}
          alt={category.name}
        />
      </Link>
      <div
        className="flex flex-col justify-center capitalize"
        style={{ marginLeft: 10 }}
      >
        <Link
          className="font-bold group-hover:text-primary"
          to={`${routes.updateCategory}/${category.name}`}
        >
          {category.name}
        </Link>
        <p
          style={{ textTransform: "capitalize" }}
          className="flex items-center my-3 text-gray-500"
        >
          <FaStore />
          <h6>
            <span className="text-sm " style={{ margin: "0px 5px" }}>
              {category.subcategories.length}
            </span>
            subcategories
          </h6>
        </p>
        <p
          style={{ textTransform: "capitalize" }}
          className="flex items-center text-gray-500"
        >
          <MdStore />
          <h6>
            <span className="text-sm " style={{ margin: "0px 5px" }}>
              {category.subcategories.length}
            </span>
            products
          </h6>
        </p>
        <p></p>
      </div>
    </div>
  ));
  // `/categories/${category._id
  return (
    <div>
      <div className="flex justify-between">
        Back
        <Link to={routes.newCategory}>add category</Link>
      </div>
      <Card
        style={{ gap: 20 }}
        className="grid grid-cols-1 py-20 md:grid-cols-2"
      >
        {categories && displayCategories}
      </Card>
    </div>
  );
};

export default Category;
{
  /* <Button onClick={handleOpen}>Open modal</Button>
<NewCategoryModal open={open} handleClose={handleClose} /> */
}
