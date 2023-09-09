import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Modal from "./../common/Modal";
import ProductList from './../common/ProductList'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (

    <ProductList></ProductList>
    
    // <div className="product">
    //   <img style={{width: "200"}} src={productImage} />
    //   <div className="description">
    //     <p>
    //       <b>{productName}</b>
    //     </p>
    //     <p> ${price}</p>
    //   </div>
    //   <div className="product-footer-wrapper">
    //     <button className="addToCartBttn" onClick={() => addToCart(id)}>
    //       Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
    //     </button>
    //     <Modal></Modal>
    //   </div>
    // </div>
  );
};
