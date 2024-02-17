import { Card } from "@tremor/react";
import OrdersTable from "../../src/components/OrdersTable/OrdersTable";
import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";
import PageLoading from "../../src/components/Loading/PageLoading";

import OrderChart from "../../src/components/orders/orderChart/orderChart";
import RevenunCards from "../../src/components/orders/RevenunCards/RevenunCards";

interface Props {}

const Orders = (props: Props) => {
  const { orders, isLoading } = useFetchOrders(props);
  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div>
      <Card style={{ gap: 20 }} className="overflow-hidden ">
        <h1 className="text-xl font-bold capitalize">orders</h1>
        <RevenunCards />
        <OrderChart />
        <OrdersTable />
      </Card>
    </div>
  );
};

export default Orders;
