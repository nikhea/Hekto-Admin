import { Card, Metric, Text } from "@tremor/react";

const RevenunCards = () => {
  return (
    <div className="flex flex-col justify-between gap-4 my-10 md:flex-row">
      <Card className="max-w-xs " decoration="top" decorationColor="pink">
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
      <Card className="max-w-xs " decoration="top" decorationColor="yellow">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          pending orders
        </p>
        <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          54,743
        </p>
      </Card>
      <Card className="max-w-xs " decoration="top" decorationColor="indigo">
        <p className="mb-5 capitalize text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          shipped orders
        </p>
        <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          64,743
        </p>
      </Card>
      <Card className="max-w-xs " decoration="top" decorationColor="green">
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
