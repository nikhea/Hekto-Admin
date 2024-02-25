import { FC } from "react";
import { Outlet } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import { Card, Text, Metric } from "@tremor/react";
import HeaderIcon from "../icons/HeaderIcon";
import OutLetLayout from "./OutLetLayout";
import SideBarNavOutput from "./SideBarNavOutput";

// border-[#E5E5E5] bg-[#E5E5E5]
const style = {
  dashBoardLayout: `flex lg:grid grid-cols-6 relative`,
  dashBoardOutPut: `col-start-1 col-end-7 md:col-start-2 md:col-end-11 h-full w-full`,
  container: `  w-[95%]  m-auto my-5 `,
  sidebar: `hidden w-[10%] lg:w-full bg-white md:block col-start-1   text-black h-screen  sticky fixe  overflow-y-hidde  top-0 bottom-0 left-0 right-0 `,
  sidebarNav: ``,
  Outlet: ``,
  logo: ` w-[80%] m-auto flex justify-center py-5   top-0 `,
};
// bg-gradient-to-tl from-pink-900 via-pink-400 to-pink-600
const SideBarLayout = () => {
  return (
    <div className={style.dashBoardLayout}>
      <div className={style.sidebar}>
        <div className={style.logo}>
          <HeaderIcon />
        </div>
        <div>
          <SideBarNavOutput />
        </div>
      </div>
      <div className={style.dashBoardOutPut}>
        <OutLetLayout>
          <div className={style.container}>
            <Outlet />
          </div>
        </OutLetLayout>
      </div>
    </div>
  );
};

export default SideBarLayout;
{
  /* <div className={style.sidebar}>
<div className={style.logo}>
  <HeaderIcon />
</div>
</div>
<div>
<div className={style.sidebarNav}>SideBarNav </div>
<div className={style.Outlet}>
  <Outlet />
</div>
</div> */
}

// const style = {
//   dashBoardLayout: `text-[#0D304A]  border-b-[0px] border-t-[0px]   overflow-hidde flex flex-col md:flex-row relative `,
//   container: `  w-[95%]  m-auto`,
//   sidebar: `bg-primary   hidden md:block md:col-start-1 md:col-end-1 h-screen lg:w-[20%] sticky  top-0 bottom-0 left-0 right-0`,
//   sidebarNav: `w-full bg-red-300`,
//   Outlet: `md:col-start-2 md:col-end-11 h-full w-full bg-blue-200 h-full w-full`,
//   logo: ` flex justify-center py-5`,
// };
