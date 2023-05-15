import { Card, Metric, Text, Flex, Icon } from "@tremor/react";
import {
  CashIcon,
  DatabaseIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
const TotalCard = () => {
  return (
    <div style={{ gap: "12px" }} className="grid grid-cols-2 ">
      <Card
        className="cursor-pointer "
        decoration="left"
        decorationColor="green"
      >
        <Flex className="space-x-6">
          <div>
            <Text className="text-base font-normal uppercase ">
              Total Revenue
            </Text>
            <Metric>$ 34,743</Metric>
          </div>
          <Icon
            icon={CashIcon}
            className="bg-green-100 rounded-md"
            color="green"
            // variant="solid"
            tooltip="Sum of Revenue"
            size="lg"
          />
        </Flex>
      </Card>
      <Card
        className="cursor-pointer "
        decoration="left"
        decorationColor="indigo"
      >
        <Flex className="space-x-6">
          <div>
            <Text className="text-base font-normal uppercase">
              Total Orders
            </Text>
            <Metric>$ 34,743</Metric>
          </div>
          <Icon
            icon={DatabaseIcon}
            className="bg-indigo-100 rounded-md"
            color="indigo"
            tooltip="Sum of Orders"
            size="lg"
          />
        </Flex>
      </Card>
      <Card
        className="cursor-pointer "
        decoration="left"
        decorationColor="red"
      >
        <Flex className="space-x-6">
          <div>
            <Text className="text-base font-normal uppercase">
              Total Products
            </Text>
            <Metric>$ 34,743</Metric>
          </div>
          <Icon
            icon={ShoppingBagIcon}
            className="bg-red-100 rounded-md"
            color="red"
            // variant="solid"
            tooltip="Sum of Products"
            size="lg"
          />
        </Flex>
      </Card>
      <Card
        className="cursor-pointer "
        decoration="left"
        decorationColor="yellow"
      >
        <Flex className="space-x-6">
          <div>
            <Text className="text-base font-normal uppercase ">
              Total Customers
            </Text>
            <Metric>$ 34,743</Metric>
          </div>
          <Icon
            icon={UserIcon}
            className="bg-yellow-100 rounded-md"
            color="yellow"
            // variant="solid"
            tooltip="Sum of Customers"
            size="lg"
          />
        </Flex>
      </Card>
    </div>
  );
};

export default TotalCard;
