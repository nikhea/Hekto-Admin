import { Card, Metric, Text, Flex, Icon } from "@tremor/react";
import {
  CashIcon,
  DatabaseIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useFetchAllUser } from "../../../Hooks/useUser/useFetchAllUser";
import { useFetchAllProducts } from "../../../Hooks/useProducts/useFetchAllProducts";
const TotalCard = () => {
  const {users} = useFetchAllUser();
  const products = useFetchAllProducts();

  return (
    <div style={{ gap: "12px" }} className="grid md:grid-cols-2">
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
            className="bg-green-100 rounded-[8px] text-2xl"
            color="green"
            // variant="solid"
            tooltip="Sum of Revenue"
            size="xl"
            // size=""
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
      <Card className="cursor-pointer " decoration="left" decorationColor="red">
        <Flex className="space-x-6">
          <div>
            <Text className="text-base font-normal uppercase">
              Total Products
            </Text>
            <Metric>{products && products.length}</Metric>
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
            <Metric> {users && users?.length}</Metric>
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
