import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
];
