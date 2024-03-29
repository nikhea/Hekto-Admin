import { Card, Title, AreaChart } from "@tremor/react";
const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const AreaCharts = () => {
  return (
    <Card className="hidden lg:block">
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        // colors={["indigo", "cyan"]}
        colors={["indigo", "pink"]}
        valueFormatter={dataFormatter}
        showGridLines={false}
        showAnimation={true}
      />
    </Card>
  );
};

export default AreaCharts;
