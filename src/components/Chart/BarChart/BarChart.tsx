import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 5743,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 9743,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 10743,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const BarCharts = () => (
  <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known
      species in the world.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of threatened species"]}
      // colors={["blue"]}
      colors={["pink"]}
      // valueFormatter={dataFormatter}
      yAxisWidth={48}
      showGridLines={false}
    />
  </Card>
);

export default BarCharts;
