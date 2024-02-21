import { Box, Typography } from "@mui/material";
import { Card, Icon, Metric, Text } from "@tremor/react";
import DeliveredIcon from "../../icons/DeliveredIcon";
import TotalIcon from "../../icons/TotalIcon";
import PendingIcon from "../../icons/PendingIcon";
import ShippedIcon from "../../icons/ShippedIcon";

const RevenunCards = () => {
  return (
    <div className="flex flex-col justify-between gap-4 mt-10 md:flex-row md:flex-wrap md:gap-4 lg:flex-wrap lg:gap-4 xl:flex-wrap xl:gap-4">
      <Card
        className="cursor-pointer md:max-w-xs"
        decoration="top"
        decorationColor="pink"
      >
        <div className="flex items-start justify-between">
          <div className="">
            <h1 className="capitalize text-[2D2D2D] text-[18px]">
              total orders
            </h1>
            <h1 className="capitalize text-[#111111] text-[32px] font-bold">
              3725
            </h1>
            <h1 className=" text-[15px]">
              <span className=" text-[#1B1EC3]">Total amount</span>:{" "}
              <span className="text-[#5f5f5f]">$34,725.38</span>
            </h1>
          </div>
          <div>
            <Icon icon={TotalIcon} tooltip="total numbers of orders" />
            {/* <TotalIcon /> */}
          </div>
        </div>
      </Card>
      <Card
        className="cursor-pointer md:max-w-xs"
        decoration="top"
        decorationColor="yellow"
      >
        <div className="flex items-start justify-between">
          <div className="">
            <h1 className="capitalize text-[2D2D2D] text-[18px]">
              pending orders{" "}
            </h1>
            <h1 className="capitalize text-[#111111] text-[32px] font-bold">
              3725
            </h1>
          </div>
          <div>
            <Icon
              icon={PendingIcon}
              tooltip="total numbers of pending orders"
            />
            {/* <PendingIcon /> */}
          </div>
        </div>
      </Card>
      <Card
        className="cursor-pointer md:max-w-xs"
        decoration="top"
        decorationColor="indigo"
      >
        <div className="flex items-start justify-between">
          <div className="">
            <h1 className="capitalize text-[2D2D2D] text-[18px]">
              shipped orders
            </h1>
            <h1 className="capitalize text-[#111111] text-[32px] font-bold">
              3725
            </h1>
          </div>
          <div>
            <Icon
              icon={ShippedIcon}
              tooltip="total numbers of shipped orders"
            />
            {/* <ShippedIcon /> */}
          </div>
        </div>
      </Card>
      <Card
        className="cursor-pointer md:max-w-xs"
        decoration="top"
        decorationColor="green"
      >
        <div className="flex items-start justify-between">
          <div className="">
            <h1 className="capitalize text-[2D2D2D] text-[18px]">
              delivered orders
            </h1>
            <h1 className="capitalize text-[#111111] text-[32px] font-bold">
              3725
            </h1>
          </div>
          <div>
            <Icon
              icon={DeliveredIcon}
              tooltip="total numbers of delivered orders"
            />
            {/* <DeliveredIcon /> */}
          </div>
        </div>
      </Card>{" "}
    </div>
  );
};

export default RevenunCards;
// DeliveredIcon
{
  /* <Card className="md:max-w-xs " decoration="top" decorationColor="yellow">
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
      </Card> */
}
