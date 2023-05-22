import AreaCharts from "../../src/components/Chart/AreaChart/AreaChart";
import BarChartGroup from "../../src/components/Chart/BarChartGroup/BarChartGroup";
import CategoriesList from "../../src/components/DashBoard/CategoriesList/CategoriesList";
import TotalCard from "../../src/components/DashBoard/TotalCard/TotalCard";
import TranscaionList from "../../src/components/DashBoard/TransactionList/TranscaionList";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const Dashboard = () => {
  return (
    <div className="">
      <TotalCard />
      <CategoriesList />
      <Grid
        // numCols={1}
        // numColsSm={2}
        // numColsLg={3}
        className="gap-2"
        style={{ margin: "12px 0", gap: "12px" }}
      >
        <Col numColSpan={1} numColSpanLg={2}>
          <AreaCharts />
        </Col>

        <TranscaionList />

        {/* <Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 3</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 4</Metric>
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 5</Metric>
        </Card> */}
        <Col numColSpan={1} numColSpanLg={3}>
          <BarChartGroup />
        </Col>
      </Grid>
    </div>
  );
};

export default Dashboard;
{
  /* <div style={{ gap: "12px" }} className="grid grid-cols-2 my-5 gap-x-4">
<AreaCharts />
<TranscaionList />
</div>
<div>
<BarChartGroup />
</div> */
}
