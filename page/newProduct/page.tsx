import { Card, Text } from "@tremor/react";
import React from "react";
import ProductForm from "../../src/components/NewProductForm/ProductForm";

const NewProduct = () => {
  return (
    <div>
      NewProduct
      <Card>
        <Text className="text-lg text-black capitalize">
          product information
        </Text>
        <ProductForm />
      </Card>
    </div>
  );
};

export default NewProduct;
