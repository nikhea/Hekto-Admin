// import React from "react";
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import PageLoading from "./components/Loading/Loading";
import Login from "../page/Login/LoginAccountForm";
import Dashboard from "../page/dashboard/page";
import SideBarLayout from "./components/Layout/SideBarLayout";
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
          <Route path="" element={<SideBarLayout />}>
            <Route path={routes.dashboard} element={<Dashboard />} />
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
