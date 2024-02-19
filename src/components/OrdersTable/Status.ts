export const status = {
  pending: "pending",
  //   processing: "processing",
  shipped: "shipped",
  delivered: "delivered",
};

export const getStatusBackground = (value: string) => {
  switch (value) {
    case status.pending:
      return "#FBF0CE";
    case status.shipped:
      return "#E0E0FC";
    case status.delivered:
      return "#D3F3DF";
    default:
      return null;
  }
};

export const getStatusColor = (value: string) => {
  switch (value) {
    case status.pending:
      return "#C39507";
    case status.shipped:
      return "#6366F1";
    case status.delivered:
      return "#22C55E";
    default:
      return null;
  }
};
