import { dashboardRoutes } from "../../routes/dashboardRoutes";
import { Link } from "react-router-dom";
const SideBarNavOutput = () => {
  const displayData = dashboardRoutes.map((routes) => (
    <div
      className="py-3 text-white cursor-pointer hover:bg-pink-700"
      key={routes.name}
    >
      <Link className="px-5 capitalize " to={routes.link}>
        {routes.name}
      </Link>
    </div>
  ));
  return (
    <div className="flex flex-col justify-evenly h-[80vh] ">{displayData}</div>
  );
};

export default SideBarNavOutput;
