import LoginAccountForm from "../Login/LoginAccountForm";
import Sider from "./Sider";

const i = `https://images.unsplash.com/photo-1688542900887-347bd5febd96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80`;

const Home = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <div className="grid h-full grid-cols-6">
        <div
          style={{ background: "#FF1493" }}
          className="hidden w-full h-full col-span-2 px-8 text-white bg-deepPink lg:flex "
        >
          <Sider />
        </div>
        <div className="w-full col-span-6 lg:col-span-4">
          <LoginAccountForm />;
        </div>
      </div>
    </div>
  );
};
// FF1493
export default Home;
// bg-pink-400
// bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200
