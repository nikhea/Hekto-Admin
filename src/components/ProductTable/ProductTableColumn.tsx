import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TbTrashXFilled } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";
import { status } from "../NewProductForm/defaultValue";
import { StopIcon } from "@heroicons/react/outline";
import useRemoveFromProducts from "../../Hooks/useProducts/useRemoveProducts";
import { Icon } from "@tremor/react";
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
        className="mb-5 rounded-full w-30 h-30 "
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
          statusStyle = " text-green-500  ";
          break;
        case status.beingrestocked:
          statusStyle = "text-blue-500 ";
          break;
        case status.outofstock:
          statusStyle = "text-yellow-500 ";
          break;
        case "delivered":
          statusStyle = "text-gray-500 bg-gray-100 ";
          break;
        default:
          statusStyle = "text-gray-500 bg-gray-100";
      }
      return (
        <div
          className={`${statusStyle} text-[12px] flex items-center  w-full py-2 rounded-md`}
        >
          <Icon
            icon={StopIcon}
            className={`hidden xl:block rounded-full ${statusStyle} text-[10px]`}
            // variant="solid"
            style={{
              fontSize: "10px",
            }}
            // tooltip="Sum of Products"
          />
          <p className="mt-1"> {params.value}</p>
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "View Live",
    sortable: false,
    width: 100,
    renderCell: (params: any) => (
      <Link target="_blank" to={`${LiveView}${params.row.slug}`}>
        <BsEyeFill
          className="text-gray-500 cursor-pointer hover:text-primary"
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
          className="text-gray-500 cursor-pointer hover:text-red-500"
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
// text-[#333]
