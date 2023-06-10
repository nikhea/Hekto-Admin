import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TbTrashXFilled } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";
import { status } from "../NewProductForm/defaultValue";
import useRemoveFromProducts from "../../Hooks/useProducts/useRemoveProducts";
const LiveView = import.meta.env.VITE_Live_View;

export const Productcolumns = [
  {
    field: "coverPhoto",
    headerName: "Product Image",
    flex: 1,
    cellClassName: "name-column--cell",
    width: 50,
    sortable: false,

    renderCell: (params: any) => (
      <LazyLoadImage
        width={100}
        height={100}
        src={params.row.coverPhoto}
        alt={params.row.coverPhoto}
      />
    ),
  },

  {
    field: "name",
    headerName: "Product Name",
    flex: 2,
    cellClassName: "name-column--cell",
    width: 200,
    renderCell: (params: any) => (
      <Link
        className=" hover:text-primary"
        to={`${routes.EditProduct}/${params.row.slug}`}
      >
        {params.row.name}
      </Link>
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
    flex: 1.5,
    width: 50,
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
    flex: 1.2,
    // width: 10,
    cellClassName: "name-column--cell",
    renderCell: (params: any) => {
      let statusStyle;
      switch (params.value) {
        case status.instock:
          statusStyle = " text-green-500";
          break;
        case status.beingrestocked:
          statusStyle = "text-blue-500";
          break;
        case status.outofstock:
          statusStyle = "text-yellow-500";
          break;
        case "delivered":
          statusStyle = "text-gray-500 bg-gray-100";
          break;
        default:
          statusStyle = "text-gray-500 bg-gray-100";
      }
      return (
        <div className={`${statusStyle} text-[12px]`}> {params.value}</div>
      );
    },
  },
  {
    field: "action",
    headerName: "View Live",
    sortable: false,
    width: 100,
    renderCell: (params: any) => (
      <Link target="_blank" to={`${LiveView}/${params.row.slug}`}>
        <BsEyeFill
          className="cursor-pointer text-[#333] hover:text-red-500"
          size={20}
        />
      </Link>
    ),
  },
  {
    field: "actions",
    headerName: "Remove",
    sortable: false,
    width: 100,
    renderCell: (params: any) => {
      const { removeFromProducts } = useRemoveFromProducts();

      const handleDeleteProduct = () => {
        // removeFromProducts(params.row._id);
      };
      return (
        <TbTrashXFilled
          className="cursor-pointer text-[#333] hover:text-red-500"
          size={20}
          onClick={handleDeleteProduct}
        />
      );
    },
  },
];

// export const handleDelete = (reviewId: any) => {
//   console.log("Deleting product with ID:", reviewId);
// };
