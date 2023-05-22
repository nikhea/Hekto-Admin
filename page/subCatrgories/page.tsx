import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import usefetchSubCategories from "../../src/Hooks/useSubCategory/usefetchSubCategories";
import PageLoading from "../../src/components/Loading/PageLoading";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";

const SubCategory = () => {
  const categories = useFetchCategories();

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
  console.log(subcategories);

  const displaySubcategories = subcategories?.pages.map((page, pageIndex) => (
    <React.Fragment key={pageIndex}>
      {page.data.map((subcategory: any) => (
        <div key={subcategory._id}>
          <Link to={`${routes.updateSubCategory}/${subcategory.name}`}>
            {subcategory.name}
          </Link>
        </div>
      ))}
    </React.Fragment>
  ));

  return (
    <div>
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
      {displaySubcategories}
      <div className="grid my-3 text-center place-content-center">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="p-2 text-white capitalize rounded-md bg-primary"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};
const headerDetails = {
  text: " add subcategory",
  link: routes.newSubCategory,
};
export default SubCategory;
