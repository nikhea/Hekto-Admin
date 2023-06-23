import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import useDeviceProperties from "../../Hooks/UseMediaQueries";
import { useState } from "react";
import { FaStore } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import IconsLoading from "../Loading/IconsLoading";
import Category from "../../../page/category/page";

import useRemoveSubCategories from "../../Hooks/useSubCategory/useRemoveSubCategories";

const SubCategoryCard = ({ subcategory }: any) => {
  const { isTabletOrMobile } = useDeviceProperties();
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const { removeFromSubCategories, removeSubCategoriesisLoading } =
    useRemoveSubCategories();

  const handleMouseEnter = (categoryId: any) => {
    setHoveredSubcategory(categoryId);
  };

  const handleMouseLeave = (categoryId: string) => {
    setHoveredSubcategory(null);
  };
  const handleDelete = (Id: any) => {
    // removeFromSubCategories(Id);
  };
  return (
    <div
      className={`flex mt-5 w-full cursor-pointer group relative ${
        !isTabletOrMobile && "justify-center"
      }`}
      key={subcategory._id}
      onMouseEnter={() => handleMouseEnter(subcategory._id)}
      onMouseLeave={() => handleMouseLeave(subcategory._id)}
    >
      <Link
        to={`${routes.updateSubCategory}/${subcategory.name}`}
        style={{ width: "50%", height: "250px", borderRadius: "10px" }}
      >
        <VisibilitySensor>
          <Img
            style={{ borderRadius: "10px" }}
            className="flex object-cover w-full h-full rounded-2xl"
            src={subcategory.photo.url}
            alt={subcategory.name}
          />
        </VisibilitySensor>
      </Link>
      <div
        className={`absolute right-0 ${
          hoveredSubcategory === subcategory._id ? "block" : "hidden"
        } transition-opacity duration-500 ease-in-out`}
      >
        {!removeSubCategoriesisLoading ? (
          <TbTrashXFilled
            className="cursor-pointer hover:text-red-500 "
            size={20}
            onClick={() => handleDelete(subcategory._id)}
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
          to={`${routes.updateSubCategory}/${subcategory.name}`}
        >
          {subcategory.name}
        </Link>
        <p
          style={{ textTransform: "capitalize" }}
          className="flex items-center my-3 text-gray-500"
        >
          <FaStore />
          <h6>
            <span className="text-sm capitalize" style={{ margin: "0px 5px" }}>
              {subcategory?.category?.name}
            </span>
            Categories
          </h6>
        </p>
        <p
          style={{ textTransform: "capitalize" }}
          className="flex items-center text-gray-500"
        >
          <MdStore />
          <h6>
            <span className="text-sm " style={{ margin: "0px 5px" }}>
              {subcategory.products.length}
            </span>
            products
          </h6>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default trackWindowScroll(SubCategoryCard);

{
  /* <Link to={`${routes.updateSubCategory}/${subcategory.name}`}>
{subcategory.name}
</Link> */
}
