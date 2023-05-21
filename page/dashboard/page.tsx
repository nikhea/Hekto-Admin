import AreaCharts from "../../src/components/Chart/AreaChart/AreaChart";
import TotalCard from "../../src/components/DashBoard/TotalCard/TotalCard";
import TranscaionList from "../../src/components/DashBoard/TotalCard/TranscaionList";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCard />
      <div style={{ gap: "12px" }} className="grid grid-cols-2 my-5 gap-x-4">
        <AreaCharts />
        <TranscaionList />
      </div>
      <div>h</div>
    </div>
  );
};

export default Dashboard;
