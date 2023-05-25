import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../src/routes/routes";
import HeaderCate from "../../src/components/HeaderCate/HeaderCate";
import usefetchSubCategories from "../../src/Hooks/useSubCategory/usefetchSubCategories";
import PageLoading from "../../src/components/Loading/PageLoading";
import { useFetchCategories } from "../../src/Hooks/useCategories/useFetchCategories";
// import SubCategoryCard from "../../src/components/SubCategoryCard/SubCategoryCard";
import { Card } from "@tremor/react";
const SubCategoryCard = lazy(
  () => import("../../src/components/SubCategoryCard/SubCategoryCard")
);

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
          <SubCategoryCard subcategory={subcategory} />
        </div>
      ))}
    </React.Fragment>
  ));

  return (
    <div>
      <HeaderCate text={headerDetails.text} link={headerDetails.link} />
      <Card style={{ gap: 20 }}>
        <div className="grid grid-cols-1 py-20 md:grid-cols-2">
          <Suspense fallback={<PageLoading />}>{displaySubcategories}</Suspense>
        </div>

        <div className="grid my-3 mt-5 text-center place-content-center">
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
      </Card>
    </div>
  );
};
const headerDetails = {
  text: " add subcategory",
  link: routes.newSubCategory,
};
export default SubCategory;
