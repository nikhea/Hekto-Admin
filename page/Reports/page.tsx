import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import AreaCharts from "../../src/components/Chart/AreaChart/AreaChart";
import BarCharts from "../../src/components/Chart/BarChart/BarChart";
import DonutCharts from "../../src/components/Chart/Donut/DountChart";
import LineCharts from "../../src/components/Chart/LineChart/LineChart";
import BarChartGroup from "../../src/components/Chart/BarChartGroup/BarChartGroup";

const Reports = () => {
  return (
    <Grid
      numCols={1}
      numColsSm={1}
      numColsLg={3}
      style={{ marginBottom: "12px", gap: "12px" }}
      className="gap-2"
    >
      <Col numColSpan={1} numColSpanLg={2}>
        <LineCharts />
      </Col>
      <BarCharts />
      <DonutCharts />
      <Col numColSpan={1} numColSpanLg={2}>
        <BarChartGroup />
      </Col>
      <Col numColSpan={1} numColSpanLg={3}>
        <AreaCharts />
      </Col>
    </Grid>
  );
};

export default Reports;

// <div className="">
// <Grid
//   numCols={1}
//   numColsMd={2}
//   style={{ marginBottom: "12px", gap: "12px" }}
// >
//   <Col className="h-full ">
//     <BarCharts />
//   </Col>
//   <Col className="h-full ">
//     <LineCharts />
//   </Col>
// </Grid>
// <Grid
//   numCols={1}
//   numColsMd={2}
//   style={{ marginBottom: "12px", gap: "12px" }}
// >
//   <Col className="h-full ">
//     <DonutCharts />
//   </Col>
//   <Col className="h-full ">
//     {/* <BarCharts /> */}
//     <BarChartGroup />{" "}
//   </Col>
// </Grid>

// <AreaCharts />
// </div>
