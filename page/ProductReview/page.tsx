import PageLoading from "../../src/components/Loading/PageLoading";
import ProductReviewTable from "../../src/components/ProductReviewComponents/ProductReviewTable";

const ProductReview = () => {
  // PageLoading
  return (
    <div>
      <ProductReviewTable />
    </div>
  );
};

export default ProductReview;

// {
//   field: "actions",
//   headerName: "Actions",
//   width: 100,
//   renderCell: (params: any) => (
//     <div>
//       <Button
//         onClick={() => handleDelete(params._id)}
//         variant="outlined"
//         color="secondary"
//         size="small"
//       >
//         Delete
//       </Button>
//     </div>
//   ),
// },
