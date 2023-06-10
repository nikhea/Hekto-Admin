import { Card, Col, Grid } from "@tremor/react";
import { useFetchCategories } from "../../../Hooks/useCategories/useFetchCategories";
import { routes } from "../../../routes/routes";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";

const CategoriesList = () => {
  const { isTabletOrMobile } = useDeviceProperties();
  const categories = useFetchCategories();

  const LoopedCategories = categories || [];
  const displayCategories = LoopedCategories.slice(0, 4).map(
    (category: any) => (
      <Link className="w-full" to={`${routes.category}`} key={category._id}>
        <div style={{ width: "100%", height: "100px", borderRadius: "10px" }}>
          {/* <VisibilitySensor> */}
          <Img
            style={{ borderRadius: "10px" }}
            className="flex object-cover w-full h-full rounded-2xl"
            src={category.coverPhoto}
            alt={category.name}
          />
          {/* </VisibilitySensor> */}
        </div>
        <h1 className="mt-3 text-center">{category.name}</h1>
      </Link>
    )
  );
  const displayCategoriesLG = LoopedCategories.map((category: any) => (
    <Link className="w-full" to={`${routes.category}`} key={category._id}>
      <div style={{ width: "100%", height: "100px", borderRadius: "10px" }}>
        <LazyLoadImage
          style={{ borderRadius: "10px" }}
          className="flex object-cover w-full h-full rounded-2xl"
          src={category.coverPhoto}
          alt={category.name}
        />
      </div>
      <h1 className="mt-3 text-center capitalize ">{category.name}</h1>
    </Link>
  ));
  return (
    <Card style={{ marginTop: "12px" }}>
      <h1 className="text-lg text-gray-500 capitalize">top categories</h1>
      {isTabletOrMobile ? (
        <div
          className="grid grid-cols-4"
          style={{ margin: "0px 0", gap: "12px" }}
        >
          {displayCategories}
        </div>
      ) : (
        <div
          className="grid grid-cols-7"
          style={{ margin: "0px 0", gap: "12px" }}
        >
          {displayCategoriesLG}
        </div>
      )}
    </Card>
  );
};

export default CategoriesList;
