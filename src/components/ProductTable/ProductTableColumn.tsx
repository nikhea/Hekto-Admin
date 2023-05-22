import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TbTrashXFilled } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";

const LiveView = `https://fortune-ecommerce.vercel.app/products/`;
export const Productcolumns = [
  {
    field: "coverPhoto",
    headerName: "Product Image",
    flex: 1,
    cellClassName: "name-column--cell",
    width: 50,
    renderCell: (params: any) => (
      //   <div style={{ height: "400px" }}>
      <LazyLoadImage
        width={100}
        height={100}
        // style={{ height: "100%", width: "auto" }}
        src={params.row.coverPhoto}
        alt={params.row.coverPhoto}
      />
      //   </div>
    ),
  },

  {
    field: "name",
    headerName: "Product Name",
    flex: 1,
    cellClassName: "name-column--cell",
    width: 310,
    renderCell: (params: any) => (
      <Link to={`${routes.users}/${params.row.name}`}>{params.row.name}</Link>
    ),
  },
  {
    field: "categoryName",
    headerName: "Category",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "subcategoryName",
    headerName: "Subcategory",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "quantity",
    headerName: "Current Qty",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    cellClassName: "name-column--cell",
    renderCell: (params: any) => <div>$ {params.value}</div>,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    cellClassName: "name-column--cell",
    renderCell: (params: any) => <div> {params.value}</div>,
  },
  {
    // field: "actions",
    headerName: "View Live",
    width: 100,
    renderCell: (params: any) => (
      <Link target="_blank" to={`${LiveView}/${params.row.name}`}>
        <BsEyeFill
          className="cursor-pointer hover:text-red-500"
          // color="#8392A5"
          size={20}
        />
      </Link>
    ),
  },
  {
    field: "actions",
    headerName: "Remove",
    width: 100,
    renderCell: (params: any) => (
      <TbTrashXFilled
        className="cursor-pointer hover:text-red-500"
        // color="#8392A5"
        size={20}
        onClick={() => handleDelete(params.row._id)}
      />
    ),
  },
];

export const handleDelete = (reviewId: any) => {
  console.log("Deleting product with ID:", reviewId);
};
