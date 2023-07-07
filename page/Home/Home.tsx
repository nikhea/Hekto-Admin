import React from "react";
import LoginAccountForm from "../Login/LoginAccountForm";
import HeaderIcon from "../../src/components/icons/HeaderIcon";

const style = {
  logo: ` w-[80%] `,
};
const Home = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <div className="grid h-full grid-cols-6">
        <div className="hidden w-full col-span-2 bg-pink-400 lg:flex ">
          <div className={style.logo}>
            <HeaderIcon />
          </div>
        </div>
        <div className="w-full col-span-6 lg:col-span-4">
          <LoginAccountForm />;
        </div>
      </div>
    </div>
  );
};

export default Home;
