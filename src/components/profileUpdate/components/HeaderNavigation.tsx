import React from "react";
import { Link } from "react-router-dom";
import Button from "../../FormElement/Button/Button";

const style = {
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
};
const HeaderNavigation = () => {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>update profile</h1>
      {/* <Link to="/profile">
        <Button isCurve uppercase primary padding full>
          <span className="mx-2">view profile</span>
        </Button>
      </Link> */}
    </div>
  );
};

export default HeaderNavigation;
