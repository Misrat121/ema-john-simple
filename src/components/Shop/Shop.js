import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
   const [products, setProducts]=useProducts();
    const [cart, setCart] =useState([]);

   

    useEffect(() => {
    
      const storedCart = getStoredCart();
      const savedCart = [];

      for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
        
      }
      setCart(savedCart);
      // console.log('local storage finished')
    }, [products])

    const handleAddToCart = (SelectedProduct) =>{
        console.log(SelectedProduct);
        let newCart= [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if(!exists){
          SelectedProduct.quantity = 1;
          newCart = [...cart, SelectedProduct];
        }
        else{
          const rest = cart.filter(product => product.id !== SelectedProduct.id);
          exists.quantity = exists.quantity + 1;
          newCart = [...rest, exists];
        }
         
        setCart(newCart);
        addToDb(SelectedProduct.id);

    }
    return (
        <div className='shop-container'>
          <div className="product-container">
            {
                products.map(product=><Product 
                    key = {product.id}
                    product = {product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
            }
          </div>
          <div className="cart-container">
           <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;