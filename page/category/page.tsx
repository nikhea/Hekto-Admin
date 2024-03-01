import { useEffect, useState } from "react";
import { routes } from "../../src/routes/routes";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";
import PageLoading from "../../src/components/Loading/PageLoading";
import { Card } from "@tremor/react";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import CategortyListItem from "./CategortyListItem";
import DraggableDialog from "../../src/components/FormElement/dialog/dialog";
import useDialogStore from "../../src/store/useDialogStore";
import useRemoveCategories from "../../src/Hooks/useCategories/useRemoveCategories";

const Category = () => {
  const [id, setId] = useState(null);
  const { open, setOpen } = useDialogStore();
  const categories = useFetchCategories();
  const { removeFromCategories, removeFromCategoriesisLoading } =
    useRemoveCategories();
  if (!categories) {
    return <PageLoading />;
  }

  const handleRemove = () => {
    alert("Are you sure you want to delete this category?" + id);
    // removeFromCategories(id);
    setOpen(false);
  };

  // useEffect(() => {
  //   if (!removeFromCategoriesisLoading) {
  //     setOpen(false);
  //   }
  // }, [removeFromCategoriesisLoading]);

  const displayCategories = categories.map((category: any) => (
    <CategortyListItem
      key={category._id}
      handleSetId={setId}
      category={category}
    />
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
      <DraggableDialog
        open={open}
        handleRemove={handleRemove}
        title="category"
        isLoading={removeFromCategoriesisLoading}
        handleClose={() => setOpen(false)}
      />
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
// {!removeFromCategoriesisLoading ? (
//   <TbTrashXFilled
//     className="cursor-pointer hover:text-red-500 "
//     size={20}
//     onClick={() => handleDelete(category._id)}
//   />
// ) : (
//   <IconsLoading />
// )}
