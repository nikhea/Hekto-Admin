import { routes } from "./routes";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser, FaCloudUploadAlt, FaMagento } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { SiGoogletagmanager } from "react-icons/si";
import { HiHomeModern } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
export const dashboardRoutes = [
  {
    icon: <MdDashboard />,
    name: "dashboard",
    link: routes.dashboard,
  },
  {
    icon: <SiGoogletagmanager />,
    name: "products",
    link: routes.products,
  },

  {
    icon: <FaCloudUploadAlt />,
    name: "category",
    link: routes.category,
  },
  {
    icon: <FiUsers />,
    name: "users",
    link: routes.users,
  },
  {
    icon: <SiGoogletagmanager />,
    name: "orders",
    link: routes.orders,
  },
  {
    icon: <FaMagento />,
    name: "product review",
    link: routes.productReview,
  },
  {
    icon: <FaUser />,
    name: "profile",
    link: routes.profile,
  },
  {
    icon: <BiStats />,
    name: "reports",
    link: routes.reports,
  },
];
