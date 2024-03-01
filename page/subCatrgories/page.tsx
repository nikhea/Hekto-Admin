import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import usefetchSubCategories from "../../src/Hooks/useSubCategory/usefetchSubCategories";
import PageLoading from "../../src/components/Loading/PageLoading";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";
import SubCategoryCard from "../../src/components/SubCategoryCard/SubCategoryCard";
import { Card } from "@tremor/react";
import { ThreeDots } from "react-loader-spinner";
import DraggableDialog from "../../src/components/FormElement/dialog/dialog";
import useDialogStore from "../../src/store/useDialogStore";
import useRemoveSubCategories from "../../src/Hooks/useSubCategory/useRemoveSubCategories";

// const SubCategoryCard = lazy(
//   () => import("../../src/components/SubCategoryCard/SubCategoryCard")
// );

const SubCategory = () => {
  const [id, setId] = useState(null);
  const { open, setOpen } = useDialogStore();
  const categories = useFetchCategories();
  const { removeFromSubCategories, removeSubCategoriesisLoading } =
    useRemoveSubCategories();
  const {
    subcategories,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = usefetchSubCategories();
  if (!subcategories) {
    return <PageLoading />;
  }

  const handleRemove = () => {
    alert("Are you sure you want to delete this category?" + id);
    // removeFromCategories(id);
    setOpen(false);
  };

  // useEffect(() => {
  //   if (!removeSubCategoriesisLoading) {
  //     setOpen(false);
  //   }
  // }, [removeSubCategoriesisLoading]);

  const displaySubcategories = subcategories?.pages.map((page, pageIndex) => (
    <React.Fragment key={pageIndex}>
      {page.data.map((subcategory: any) => (
        <div key={subcategory._id}>
          <SubCategoryCard handleSetId={setId} subcategory={subcategory} />
        </div>
      ))}
    </React.Fragment>
  ));

  return (
    <div className="">
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
      <Card style={{ gap: 20 }}>
        <div className="grid grid-cols-1 py-20 md:grid-cols-2">
          {displaySubcategories}
        </div>

        <div className="my-3 mt-5 text-center gri place-content-center">
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="p-2 text-white capitalize rounded-md bg-primary"
            >
              {isFetchingNextPage ? (
                <ThreeDots
                  height="10"
                  width="30"
                  radius="9"
                  color="#FFF "
                  wrapperClass="flex text-center cursor-not-allowed py-2 px-5"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                "Load More"
              )}
            </button>
          )}
        </div>
      </Card>
      <DraggableDialog
        open={open}
        handleRemove={handleRemove}
        title="subcategory"
        isLoading={removeSubCategoriesisLoading}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
};
const headerDetails = {
  text: " add subcategory",
  link: routes.newSubCategory,
};
export default SubCategory;
