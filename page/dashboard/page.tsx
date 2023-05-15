import AreaCharts from "../../src/components/Chart/AreaChart/AreaChart";
import TotalCard from "../../src/components/DashBoard/TotalCard/TotalCard";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCard />
      <div className="grid grid-cols-2 my-5">
        <AreaCharts />
      </div>
    </div>
  );
};

export default Dashboard;
