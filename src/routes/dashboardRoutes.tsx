import { routes } from "./routes";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaUser, FaStore } from "react-icons/fa";

import { MdDashboard, MdStore } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import {
  HiOutlineDocumentReport,
  HiDocumentReport,
  HiUsers,
} from "react-icons/hi";

import { FiUsers } from "react-icons/fi";
export const dashboardRoutes = [
  {
    icon: <MdDashboard />,
    name: "dashboard",
    link: routes.dashboard,
  },
  {
    icon: <MdStore />,
    name: "products",
    link: routes.products,
  },

  {
    icon: <FaStore />,
    name: "category",
    link: routes.category,
  },
  {
    icon: <FaStore />,
    name: "subCategory",
    link: routes.subCategory,
  },
  {
    icon: <HiUsers />,
    name: "customers",
    link: routes.customers,
  },
  {
    icon: <SiGoogletagmanager />,
    name: "orders",
    link: routes.orders,
  },
  {
    icon: <AiFillStar />,
    name: "product review",
    link: routes.productReview,
  },
  {
    icon: <FaUser />,
    name: "profile",
    link: routes.profile,
  },
  {
    icon: <HiDocumentReport />,
    name: "reports",
    link: routes.reports,
  },
];
