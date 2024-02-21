import { useState } from "react";
import Humburger from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HumburgerData from "./HumburgerData";
import useDeviceProperties from "../../Hooks/UseMediaQueries";

const HumburgerLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseDrawer = () => {
    setIsOpen(false);
  };
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className=" lg:hidden">
      <button
        className=" md:hidden relative z-[99999999]"
        onClick={toggleDrawer}
      >
        <Humburger toggled={isOpen} />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        duration={1000}
        className="md:hidden text-[#0D304A]"
        // style={{ width: "100vw" }}
        style={{ width: "70vw" }}

        // zIndex: "999"
      >
        <HumburgerData onClose={CloseDrawer} />
      </Drawer>
    </div>
  );
};

export default HumburgerLayout;
