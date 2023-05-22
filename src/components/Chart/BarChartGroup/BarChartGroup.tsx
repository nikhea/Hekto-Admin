import { Card, BarChart, Title, Text } from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;
const BarChartGroup = () => {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      {/* <div style={{ overflow: "hidden", borderRadius: "8px" }}> */}
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Sales", "Profit"]}
        colors={["indigo", "fuchsia"]}
        stack={false}
        showGridLines={false}
        valueFormatter={valueFormatter}
      />
      {/* </div> */}
    </Card>
  );
};

export default BarChartGroup;

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];
