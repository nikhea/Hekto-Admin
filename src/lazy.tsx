import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import PageLoading from "./components/Loading/Loading";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

// Lazy load the components
const Login = React.lazy(() => import("../page/Login/LoginAccountForm"));
const Dashboard = React.lazy(() => import("../page/dashboard/page"));
const SideBarLayout = React.lazy(
  () => import("./components/Layout/SideBarLayout")
);
const Products = React.lazy(() => import("../page/products/page"));
const Category = React.lazy(() => import("../page/category/page"));
const Users = React.lazy(() => import("../page/users/page"));
const Orders = React.lazy(() => import("../page/Orders/page"));
const ProductReview = React.lazy(() => import("../page/ProductReview/page"));
const Profile = React.lazy(() => import("../page/profile/page"));
const Reports = React.lazy(() => import("../page/Reports/page"));
const NewProduct = React.lazy(() => import("../page/newProduct/page"));
const NewCategory = React.lazy(
  () => import("../page/category/newCategory/page")
);
const UpdataCategory = React.lazy(
  () => import("../page/category/updataCategory/page")
);
const UserInfo = React.lazy(() => import("../page/users/userInfo/page"));
const SubCategory = React.lazy(() => import("../page/subCatrgories/page"));
const NewSubCategory = React.lazy(
  () => import("../page/subCatrgories/newSubCategory/page")
);
const UpdataSubCategory = React.lazy(
  () => import("../page/subCatrgories/UpdataSubCategory/page")
);

const ScrollToTopPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [pathname]);
  return null;
};

const RouteComponent = () => {
  return (
    <>
      <ScrollToTopPage />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path={routes.home} element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="" element={<SideBarLayout />}>
              <Route path={routes.dashboard} element={<Dashboard />} />
              <Route path={routes.products} element={<Products />} />
              <Route path={routes.newProduct} element={<NewProduct />} />
              <Route path={routes.category} element={<Category />} />
              <Route path={routes.newCategory} element={<NewCategory />} />
              <Route
                path={`${routes.updateCategory}/:name`}
                element={<UpdataCategory />}
              />
              <Route path={routes.subCategory} element={<SubCategory />} />
              <Route
                path={routes.newSubCategory}
                element={<NewSubCategory />}
              />
              <Route
                path={`${routes.updateSubCategory}/:name`}
                element={<UpdataSubCategory />}
              />
              <Route path={routes.users} element={<Users />} />
              <Route path={`${routes.users}/:name`} element={<UserInfo />} />
              <Route path={routes.orders} element={<Orders />} />
              <Route path={routes.productReview} element={<ProductReview />} />
              <Route path={routes.profile} element={<Profile />} />
              <Route path={routes.reports} element={<Reports />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default RouteComponent;
