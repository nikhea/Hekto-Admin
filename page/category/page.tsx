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
import { IoChevronBackOutline } from "react-icons/io5";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import { TbTrashXFilled } from "react-icons/tb";
import useRemoveCategories from "../../src/Hooks/useCategories/useRemoveCategories";
import IconsLoading from "../../src/components/Loading/IconsLoading";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";

const Category = () => {
  const { removeFromCategories, removeFromCategoriesisLoading } =
    useRemoveCategories();
  const { isTabletOrMobile } = useDeviceProperties();
  const categories = useFetchCategories();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  if (!categories) {
    return <PageLoading />;
  }
  const handleMouseEnter = (categoryId: any) => {
    setHoveredCategory(categoryId);
  };

  const handleMouseLeave = (categoryId: string) => {
    setHoveredCategory(null);
  };
  const handleDelete = (Id: any) => {
    // removeFromCategories(Id);
  };
  const displayCategories = categories.map((category: any) => (
    <div
      className={`flex mt-5 w-full cursor-pointer group relative ${
        !isTabletOrMobile && "justify-center"
      }`}
      key={category._id}
      onMouseEnter={() => handleMouseEnter(category._id)}
      onMouseLeave={() => handleMouseLeave(category._id)}
    >
      <Link
        to={`${routes.updateCategory}/${category.name}`}
        style={{ width: "50%", height: "250px", borderRadius: "10px" }}
      >
        <VisibilitySensor>
          <Img
            style={{ borderRadius: "10px" }}
            className="flex object-cover w-full h-full rounded-2xl"
            src={category.coverPhoto}
            alt={category.name}
          />
        </VisibilitySensor>
      </Link>
      <div
        className={`absolute right-0 ${
          hoveredCategory === category._id ? "block" : "hidden"
        } transition-opacity duration-500 ease-in-out`}
      >
        {!removeFromCategoriesisLoading ? (
          <TbTrashXFilled
            className="cursor-pointer hover:text-red-500 "
            size={20}
            onClick={() => handleDelete(category._id)}
          />
        ) : (
          <IconsLoading />
        )}
      </div>
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
  return (
    <div>
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
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
const headerDetails = {
  text: " add category",
  link: routes.newCategory,
};
{
  /* <Button onClick={handleOpen}>Open modal</Button>
<NewCategoryModal open={open} handleClose={handleClose} /> */
}
