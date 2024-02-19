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
        customer: {
          name: `${item.user.firstname} ${item.user.lastname}`,
          email: item.user.email,
          image:
            "https://res.cloudinary.com/djkqaqoj3/image/upload/v1686218309/user/profile/imonikhea%20ugbodaga-1686218049954/jznnmwxvb5e6yhovkwfo.jpg",
        },
        lastname: item.user.lastname,
        productName: item.product.name,
      };

      reviews.push(review);
    });
  }
  return (
    <div className="grid h-screen place-items-center">
      <ProductReviewTable reviews={reviews} />
    </div>
  );
};

export default ProductReview;
