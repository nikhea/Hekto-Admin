import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../../data/mockData";
import { Card } from "@tremor/react";

const TranscaionList = () => {
  return (
    <Card className="overflow-auto h-[400px]">
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="15px"
        >
          <Typography variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
          >
            <Box>
              <Typography variant="h5" fontWeight="600">
                {transaction.txId}
              </Typography>
              <Typography>{transaction.user}</Typography>
            </Box>
            <Box>{transaction.date}</Box>
            <Box p="5px 10px" borderRadius="4px">
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default TranscaionList;
