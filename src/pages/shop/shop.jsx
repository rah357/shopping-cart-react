import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import ProductList from "./../common/ProductList";
import Box from "../common/CardBox";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <ProductList></ProductList>
    </div>
  );
};
