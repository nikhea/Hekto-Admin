import { dashboardRoutes } from "../../routes/dashboardRoutes";
import { Link, NavLink } from "react-router-dom";

const style = {
  active: `bg-pink-700 text-white  `,
  nav: `flex text-white  px-5 py-3 font-bold ext-white capitalize cursor-pointer hover:bg-pink-500 `,
  icons: "",
};
// px-5 py-3 font-bold text-white capitalize cursor-pointer hover:bg-pink-500 flex items-center
const SideBarNavOutput = () => {
  const displayData = dashboardRoutes.map((routes) => (
    <NavLink
      key={routes.name}
      className={({ isActive }) =>
        isActive ? `${style.active} ${style.nav}` : `${style.nav}`
      }
      to={routes.link}
    >
      <span
        style={{
          marginRight: "11px",
          fontSize: "20px",
        }}
      >
        {routes.icon}
      </span>
      <h1 className="hidden lg:block"> {routes.name}</h1>
    </NavLink>
  ));
  return (
    <div className="flex flex-col justify-evenly h-[80vh] ">{displayData}</div>
  );
};

export default SideBarNavOutput;
