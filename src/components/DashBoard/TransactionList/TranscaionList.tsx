import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../../data/mockData";
import { Card } from "@tremor/react";
import { useFetchOrders } from "../../../Hooks/useOrder/useFetchOrders";
import { formatToCurrency } from "../../../utils/formateNumbers";
import { formatDate, formatTime } from "../../../utils/getFullYear";

interface Props {
  initialData?: any;
}

const TranscaionList = (props?: Props) => {
  const { orders, isLoading } = useFetchOrders(props);

  return (
    <Card className="overflow-auto m-0 p-0 full h-[380px] relative bg-white ">
      <Typography className="sticky top-0 w-full pt-10 text-lg font-medium text-center text-gray-700 bg-white">
        Recent Transactions
      </Typography>
      <div className="pr-6 ">
        {orders &&
          orders.slice(0, 10).map((order: any, index: number) => (
            <Box
              key={order._id}
              className="flex justify-between p-4 border-b border-gray-200"
            >
              <Box className="flex items-center justify-center ">
                <Box>
                  <div
                    className={`
                    flex items-center justify-center w-10 h-10 text-white rounded-full 
                ${index % 2 === 0 ? " bg-pink-300" : "bg-red-300"}
                
                `}
                  >
                    <Typography className="capitalize">{`${order.user.firstname.charAt(
                      0
                    )}.${order.user.lastname.charAt(0)}`}</Typography>
                  </div>
                </Box>
                <Box className="mx-3 text-gray-500">
                  <Typography> {formatDate(order.createdAt)}</Typography>
                  <Typography
                    style={{ fontSize: "12px" }}
                    className="mx-3 text-gray-400"
                  >
                    {formatTime(order.createdAt)}
                  </Typography>
                </Box>
              </Box>
              <Box className="text-green-500">
                ${formatToCurrency(order.total)}
              </Box>
            </Box>
          ))}
      </div>
    </Card>
  );
};

export default TranscaionList;
