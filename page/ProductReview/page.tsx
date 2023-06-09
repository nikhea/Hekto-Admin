import usefetchAllReviews from "../../src/Hooks/useReview/usefetchAllReviews";
import PageLoading from "../../src/components/Loading/PageLoading";
import ProductReviewTable from "../../src/components/ProductReviewComponents/ProductReviewTable";

const ProductReview = () => {
  const data = usefetchAllReviews();
  if (!data) {
    return <PageLoading />;
  }
  const reviews: any = [];
  if (data) {
    data.forEach((item: any) => {
      const review = {
        _id: item._id,
        published: item.published,
        comment: item.comment,
        rating: item.rating,
        customername: `${item.user.firstname} ${item.user.lastname}`,
        lastname: item.user.lastname,
        productName: item.product.name,
      };

      reviews.push(review);
    });
  }
  return (
    <div>
      <ProductReviewTable reviews={reviews} />
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
