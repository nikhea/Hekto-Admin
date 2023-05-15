import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

export type IOutLetLayout = {
  children: React.ReactNode;
};
const OutLetLayout: FC<IOutLetLayout> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-full">
      <Header />
      <div className="h-[100%] bg-gray-100"> {children}</div>
      <Footer />
    </div>
  );
};

export default OutLetLayout;
