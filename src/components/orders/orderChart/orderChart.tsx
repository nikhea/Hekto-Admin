import { AreaChart, Card, Metric, Text } from "@tremor/react";
import { HiDotsVertical } from "react-icons/hi";
import { formatToCurrency } from "../../../utils/formateNumbers";

const OrderChart = ({ orderStats }: any) => {
  const data = [
    {
      Month: "Jan 21",
      "Gross Volume": 2890,
      "Successful Payments": 2400,
      Customers: 4938,
    },
    {
      Month: "Feb 21",
      "Gross Volume": 1890,
      "Successful Payments": 1398,
      Customers: 2938,
    },
    {
      Month: "Mar 21",
      "Gross Volume": 2190,
      "Successful Payments": 1900,
      Customers: 1638,
    },
    {
      Month: "Apr 21",
      "Gross Volume": 3470,
      "Successful Payments": 3908,
      Customers: 2138,
    },
    {
      Month: "May 21",
      "Gross Volume": 2170,
      "Successful Payments": 4800,
      Customers: 2142,
    },
    {
      Month: "Jun 21",
      "Gross Volume": 3170,
      "Successful Payments": 3800,
      Customers: 5120,
    },
    {
      Month: "Jul 21",
      "Gross Volume": 3490,
      "Successful Payments": 4300,
      Customers: 3890,
    },
    {
      Month: "Aug 21",
      "Gross Volume": 2190,
      "Successful Payments": 4100,
      Customers: 3165,
    },
    {
      Month: "Sep 21",
      "Gross Volume": 3344,
      "Successful Payments": 4934,
      Customers: 1945,
    },
    {
      Month: "Oct 21",
      "Gross Volume": 1564,
      "Successful Payments": 1245,
      Customers: 2345,
    },
    {
      Month: "Nov 21",
      "Gross Volume": 3345,
      "Successful Payments": 2654,
      Customers: 4845,
    },
    {
      Month: "Dec 21",
      "Gross Volume": 2740,
      "Successful Payments": 3421,
      Customers: 2945,
    },
    {
      Month: "Jan 22",
      "Gross Volume": 3890,
      "Successful Payments": 2980,
      Customers: 2645,
    },
    {
      Month: "Sep 21",
      "Gross Volume": 3344,
      "Successful Payments": 4934,
      Customers: 1945,
    },
    {
      Month: "Oct 21",
      "Gross Volume": 1564,
      "Successful Payments": 1245,
      Customers: 2345,
    },
    {
      Month: "Nov 21",
      "Gross Volume": 3345,
      "Successful Payments": 2654,
      Customers: 4845,
    },
    {
      Month: "Dec 21",
      "Gross Volume": 2740,
      "Successful Payments": 3421,
      Customers: 2945,
    },
    {
      Month: "Jan 22",
      "Gross Volume": 3890,
      "Successful Payments": 2980,
      Customers: 2645,
    },
    {
      Month: "Sep 21",
      "Gross Volume": 3344,
      "Successful Payments": 4934,
      Customers: 1945,
    },
    {
      Month: "Oct 21",
      "Gross Volume": 1564,
      "Successful Payments": 1245,
      Customers: 2345,
    },
    {
      Month: "Nov 21",
      "Gross Volume": 3345,
      "Successful Payments": 2654,
      Customers: 4845,
    },
    {
      Month: "Dec 21",
      "Gross Volume": 2740,
      "Successful Payments": 3421,
      Customers: 2945,
    },
    {
      Month: "Jan 22",
      "Gross Volume": 3890,
      "Successful Payments": 2980,
      Customers: 2645,
    },
  ];

  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Card className="w-full h-full my-10">
      <div className="flex items-center justify-between">
        <div>
          <Text className="text-lg font-bold capitalize">Orders Overview</Text>
          <Metric>$ {formatToCurrency(orderStats.totalSum)}</Metric>
        </div>
        <HiDotsVertical className="text-2xl text-gray-500 " />
      </div>

      <AreaChart
        className="mt-8 "
        data={data}
        categories={["Gross Volume"]}
        index="Month"
        colors={["pink"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
        showLegend={false}
        // showYAxis={false}
        // showLegend={false}
        showGridLines={false}
      />
    </Card>
  );
};

export default OrderChart;
