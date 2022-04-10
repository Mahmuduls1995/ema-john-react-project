import React from 'react';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css'
const Product = (props) => {
    // console.log(props);
    const {handleAddToCart,product}=props;
  const {name,img, seller,price,ratings} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <h6 className="product-name">{name}</h6>
            <div className="product-info">
            <p>Price: {price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                <p className="btn-text py-2">Add to Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;