import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../../data/mockData";
import { Card } from "@tremor/react";

const TranscaionList = () => {
  return (
    <Card className="overflow-auto  full h-[380px]">
      <Typography className="text-lg font-medium text-center text-gray-700">
        Recent Transactions
      </Typography>
      {mockTransactions.map((transaction, i) => (
        <Box className="grid w-full grid-cols-3 py-10 text-gray-500 place-items-center place-content-center ">
          <Box>
            {/* <Typography className="font-medium">{transaction.txId}</Typography> */}
            <Typography className="capitalize">{transaction.user}</Typography>
          </Box>
          <Box>{transaction.date}</Box>
          <Box>${transaction.cost}</Box>
        </Box>
      ))}
    </Card>
  );
};

export default TranscaionList;
{
  /* <Box
key={`${transaction.txId}-${i}`}
display="flex"
justifyContent="space-between"
alignItems="center"
>
<Box>
  <Typography fontWeight="400">{transaction.txId}</Typography>
  <Typography>{transaction.user}</Typography>
</Box>
<Box>{transaction.date}</Box>
<Box>${transaction.cost}</Box>
</Box> */
}
