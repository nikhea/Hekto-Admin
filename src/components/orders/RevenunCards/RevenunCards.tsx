import { Card, Metric, Text } from "@tremor/react";

const RevenunCards = () => {
  return (
    <div
      className="flex flex-col justify-between gap-4 mt-10 md:flex-row md:flex-wrap md:gap-4 lg:flex-wrap lg:gap-4 xl:flex-wrap xl:gap-4"
      //  className="flex flex-col justify-between gap-4 mt-10 md:flex-row md:flex-wrap md:gap-4"
    >
      {/* flex flex-col  justify-between md:flex-row md:col-span-2 w-full gap-10 xl:grid-cols-4 mt-10 md:gap-x-[4px] */}
      {/* flex flex-wrap justify-between w-full gap-4 */}
      {/* lg:flex-row */}
      {/* flex flex-col justify-between w-full gap-4 my-10 md:col-span-2 */}
      <Card className="md:max-w-xs " decoration="top" decorationColor="pink">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          total orders
        </p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            34725
          </p>
          <div>
            <h1 className="capitalize ">total amount</h1>
            <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              $34,725
            </p>
          </div>
        </div>
      </Card>
      <Card className="md:max-w-xs " decoration="top" decorationColor="yellow">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          pending orders
        </p>
        <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          54,743
        </p>
      </Card>
      <Card className="md:max-w-xs " decoration="top" decorationColor="indigo">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          shipped orders
        </p>
        <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          64,743
        </p>
      </Card>
      <Card className="md:max-w-xs " decoration="top" decorationColor="green">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          delivered orders
        </p>
        <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          44,743
        </p>
      </Card>
    </div>
  );
};

export default RevenunCards;
