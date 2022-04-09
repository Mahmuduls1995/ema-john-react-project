import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

      const  Navigate =useNavigate();
    const handleRemoveProduct = (product) => {
        const rest =cart.filter(pd=>pd.id!==product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    // console.log(products)
    // useEffect( () =>{
    //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        // fetch('products.json')
    //     .then(response => response.json())
    //     .then(data =>setProducts(data))
    // },[])


    return (
        <div className="shop-container">
            <div className="review-item-container">
            {
                // products.length===0? <h1>Loading...</h1>:
                cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                        
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={()=>Navigate('/inventory')}>Proceed Checkout </button>
                    {/* <button>
                        
                    <Link to="/">Proceed to checkout</Link>
                    </button> */}
                </Cart>
            </div>
        </div>
    );
};

export default Orders;