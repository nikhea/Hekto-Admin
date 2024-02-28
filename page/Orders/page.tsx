import { Card } from "@tremor/react";
import OrdersTable from "../../src/components/OrdersTable/OrdersTable";
import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";
import PageLoading from "../../src/components/Loading/PageLoading";

import OrderChart from "../../src/components/orders/orderChart/orderChart";
import RevenunCards from "../../src/components/orders/RevenunCards/RevenunCards";
import { formatDate, formatTime } from "../../src/utils/getFullYear";
import { formatToCurrency } from "../../src/utils/formateNumbers";
import useDeviceProperties from "../../src/Hooks/UseMediaQueries";
import OrdersMobileCards from "../../src/components/orders/OrdersMobile/OrdersMobileCards";
import { useFetchOrdersStats } from "../../src/Hooks/useOrder/useFetchOrdersStats";

interface Props {}

const Orders = (props: Props) => {
  const { isTabletOrMobile, isMobile } = useDeviceProperties();

  const { orders, isLoading } = useFetchOrders(props);
  const orderStats = useFetchOrdersStats();

  if (isLoading) {
    return <PageLoading />;
  }
  orders;
  const data: any = [];
  function formatShippingAddress(address: any) {
    return `${address?.street}, ${address?.city}\n${address?.state}, ${address?.country}, ${address?.postalCode}`;
  }
  if (orders) {
    orders.forEach((item: any) => {
      const review = {
        _id: item._id,
        customer: {
          name: `${item.user.firstname} ${item.user.lastname}`,
          email: item.user.email,
          image:
            "https://res.cloudinary.com/djkqaqoj3/image/upload/v1686020514/cover-productImages-undefined-1686020113705/qggstfyhcspzpklr4bhl.jpg",
        },
        name: `${item.user.firstname + item.user.lastname} ${item.user.email}`,
        image:
          "https://res.cloudinary.com/djkqaqoj3/image/upload/v1686020514/cover-productImages-undefined-1686020113705/qggstfyhcspzpklr4bhl.jpg",
        total: formatToCurrency(item.total),
        deliveryStatus: item.deliveryStatus,
        date: formatDate(item.createdAt),
        time: formatTime(item.createdAt),
        shippingAddress: item?.user?.shipping
          ? formatShippingAddress(item?.user?.shipping?.address)
          : `Jane DoeFloral Solutions P.O. Box 98765, Queens, New York 34586`,
        totalItem: 567,
      };

      data.push(review);
    });
  }
  {
  }
  return (
    <div>
      {/* className="overflow-hidden " */}
      <Card style={{ gap: 20 }}>
        <h1 className="text-xl font-bold capitalize">orders</h1>
        <RevenunCards data={orderStats} />
        <OrderChart />
        {isTabletOrMobile ? (
          <OrdersMobileCards orders={data} />
        ) : (
          <OrdersTable orders={data} />
        )}
      </Card>
    </div>
  );
};

export default Orders;
