// import React from "react";
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import PageLoading from "./components/Loading/Loading";
import Login from "../page/Login/LoginAccountForm";
import Dashboard from "../page/dashboard/page";
import SideBarLayout from "./components/Layout/SideBarLayout";
import Products from "../page/products/page";
import Category from "../page/category/page";
import Users from "../page/users/page";
import Orders from "../page/Orders/page";
import ProductReview from "../page/ProductReview/page";
import Profile from "../page/profile/page";
import Reports from "../page/Reports/page";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useUser } from "./auth/auth";
import NewProduct from "../page/newProduct/page";
const ScrollToTopPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          <Route path="" element={<ProtectedRoutes />}>
            <Route path="" element={<SideBarLayout />}>
              <Route path={routes.dashboard} element={<Dashboard />} />
              <Route path={routes.products} element={<Products />} />
              <Route path={routes.newProduct} element={<NewProduct />} />
              <Route path={routes.category} element={<Category />} />
              <Route path={routes.users} element={<Users />} />
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
