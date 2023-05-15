import AreaCharts from "../../src/components/Chart/AreaChart/AreaChart";
import BarCharts from "../../src/components/Chart/BarChart/BarChart";
import DonutCharts from "../../src/components/Chart/Donut/DountChart";
import LineCharts from "../../src/components/Chart/LineChart/LineChart";

const Reports = () => {
  return (
    <div>
      <div className="grid grid-cols-12 my-5" style={{ gap: "12px" }}>
        <div style={{ height: "100%", gridColumnStart: 1, gridColumnEnd: 8 }}>
          <BarCharts />
        </div>
        <div style={{ height: "100%", gridColumnStart: 8, gridColumnEnd: 13 }}>
          <LineCharts />
        </div>
      </div>
      <div className="grid grid-cols-12 my-5" style={{ gap: "12px" }}>
        <div style={{ height: "100%", gridColumnStart: 1, gridColumnEnd: 6 }}>
          <DonutCharts />
        </div>
        <div style={{ height: "100%", gridColumnStart: 6, gridColumnEnd: 13 }}>
          <BarCharts />
        </div>
      </div>
      <AreaCharts />
    </div>
  );
};

export default Reports;
