import { useQuery } from "@tanstack/react-query";
import { fetchAllSubCategories } from "../../services/shared/subcategories";

const usefetchAllSubCategories = () => {
  const { data: subCategories } = useQuery(
    ["AllSubcategories"],
    fetchAllSubCategories
  );

  return subCategories;
};

export default usefetchAllSubCategories;
