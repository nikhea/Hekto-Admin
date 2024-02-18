import { NavLink } from "react-router-dom";
import { dashboardRoutes } from "../../routes/dashboardRoutes";
const style = {
  active: `bg-pink-700 text-white  `,
  nav: `flex   px-5 py-3 text-gray-500 font-bold  capitalize cursor-pointer hover:bg-pink-500 hover:text-white`,
  icons: "",
};
const HumburgerData = ({ onClose }: any) => {
  const displayData = dashboardRoutes.map((routes) => (
    <NavLink
      key={routes.name}
      className={({ isActive }) =>
        isActive ? `${style.active} ${style.nav}` : `${style.nav}`
      }
      to={routes.link}
      onClick={onClose}
    >
      <span
        style={{
          marginRight: "11px",
          fontSize: "20px",
        }}
      >
        {routes.icon}
      </span>
      <h1 className="block lg:hidden"> {routes.name}</h1>
    </NavLink>
  ));
  return (
    <div className="flex flex-col h-full justify-evenly">{displayData}</div>
  );
};
// md:mt-6 mt-10
export default HumburgerData;
