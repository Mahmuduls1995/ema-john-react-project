import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css';

const Shop = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]= useState([]);
    console.log(products);
    // useEffect( () =>{
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    //     fetch('products.json')
    //     .then(response => response.json())
    //     .then(data =>setProducts(data))
    // },[])

    useEffect(() => {
        const storedCart= getStoredCart();
        const savedCart=[];
        for (const id in storedCart) {
          const addProduct=products.find(product => product.id === id)
          if (addProduct) {
              const quantity=storedCart[id]
              addProduct.quantity=quantity;
              savedCart.push(addProduct)
              
          }
        }
        setCart(savedCart)
    },[products])


    const handleAddToCart = (selectedProduct) => {


        // console.log(product);
        // cart.push(product);
        let newCart=[];
        const exist=cart.find(product=>product.id===selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity=1
             newCart=[...cart,selectedProduct]
        }

        else{
            const rest=cart.filter(product=>product.id !==selectedProduct.id)
            exist.quantity=exist.quantity+1;
            newCart=[...rest,exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                { 
                products.map(product =><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className="border-2 px-2 rounded-md bg-lime-200">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;