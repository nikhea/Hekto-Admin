import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";
import { FaStore } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import useDeviceProperties from "../../src/Hooks/UseMediaQueries";
import { useState } from "react";
import useDialogStore from "../../src/store/useDialogStore";

const CategortyListItem = ({ category, handleSetId }: any) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { setOpen } = useDialogStore();

  const { isTabletOrMobile } = useDeviceProperties();

  const handleMouseEnter = (categoryId: any) => {
    setHoveredCategory(categoryId);
  };

  const handleMouseLeave = (categoryId: string) => {
    setHoveredCategory(null);
  };

  const handleDelete = (id: string) => {
    setOpen(true);
    handleSetId(id);
  };
  return (
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
        <TbTrashXFilled
          className="cursor-pointer hover:text-red-500 "
          size={20}
          onClick={() => handleDelete(category.name)}
        />
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
      </div>
      {/* <DraggableDialog
        open={open}
        handleRemove={() => handleDelete(category._id)}
        title="Category"
        isLoading={removeFromCategoriesisLoading}
        handleClose={() => setOpen(false)}
      /> */}
    </div>
  );
};

export default CategortyListItem;
