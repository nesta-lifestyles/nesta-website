import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const NestaDecorCartContext = createContext();

export const NestaDecorCartProvider = ({ children }) => {
    const [cart, setCart] = useState(new Map());
    
    const firstMessage = "Your cart is awaiting your selections."
    const whenManuallyEmptyTheCart = "You have no items in your cart"

    const [cartEmptyMessage, updateCartEmptyMessage] = useState(firstMessage)
    
    const uniqueId = uuidv4();
    
    const addToCart = (product) => {    
     console.log("Called for adding into Cart",product) 
      product = {
        ...product,
        "id":uniqueId,
      }
      if(cart.has(product.code)) {
        var productFromMap = cart.get(product.code);
        productFromMap.count +=1;
        setCart((cart) =>{
            var newCart = new Map(cart)
            newCart.set(productFromMap.code, productFromMap)
            return newCart;
        });
     } else {
        product = {
            ...product,
            "count":1,
        }
        setCart((cart) =>{
            var newCart = new Map(cart)
            newCart.set(product.code, product)
            return newCart;
        });
     }
     console.log("Cart After add ",product, "into cart:::", cart) 
    };

    const updateToCart = (product, count) => {
        if(cart.has(product.code)) {
            if(count <=0) {
                setCart((cart) =>{
                    var newCart = new Map(cart)
                    newCart.delete(product.code);
                    return newCart;
                });
            } else {
                var productFromMap = cart.get(product.code);
                productFromMap.count = count;
                setCart((cart) =>{
                    var newCart = new Map(cart)
                    newCart.set(productFromMap.code, productFromMap)
                    return newCart;
                });
    
            }
         } else {
            if(count >0) {
                product = {
                    ...product,
                    "count":count,
                }
                setCart((cart) =>{
                    var newCart = new Map(cart)
                    newCart.set(product.code, product)
                    return newCart;
                });    
            }
         }
      };
    


    useEffect(() => {
        console.log("Cart updated:", cart);
        // Perform other side effects here if needed
      }, [cart]);
    
    const getCountOf = (product) => {
        console.log("Called for GetCount of into CART::: ",product) 
        console.log("Called for GetCount of into Product::: ",product) 
        var productFromCart =  cart.get(product.code)
        console.log("Product From Cart::: ",productFromCart) 
        if(productFromCart)  {
            return productFromCart.count
        }
        return 0;
    };
    
    const getUnqueItemsByCount = () => {
        // var cartToBeReturn = new Map();
        // cart.forEach(item => {
        //     if(cartToBeReturn.has(item.code)) {
        //         cartToBeReturn.get(item.code).count +=1;
        //     } else {
        //         var itemToBeAdded = {
        //             ...item, 'count':1
        //         }
        //         cartToBeReturn.set(item.code ,itemToBeAdded)
        //     }
        // })
        return cart;
    };

    const getTotalCount =() =>{
        console.log("Called for get Total Count",cart) 
        var count  = 0
        cart.forEach((value, key) =>{
            // console.log("Value from the MAP ::: ",value)
            // console.log("key from the MAP ::: ",key)
            count += value.count
        })
        console.log("Total Count ::: ",count)
        return count;
    }
  
    const removeDecoreItemsByCode = (code) => {
        if(cart.has(code)) {
            setCart((cart) => {
                var newCart = new Map(cart)
                newCart.delete(code);
                var count  = 0
                newCart.forEach((value, key) =>{
                    // console.log("Value from the MAP ::: ",value)
                    // console.log("key from the MAP ::: ",key)
                    count += value.count
                })
                if(count===0) {
                    updateCartEmptyMessage(whenManuallyEmptyTheCart)
                } 
                return newCart;
            }); 
        }
         
    };

    const removeFromCart = (product) => {
        if(cart.has(product.code)) {
            var productFromMap = cart.get(product.code);
            productFromMap.count -=1;
            if(productFromMap.count <= 0) {
                setCart((cart) =>{
                    var newCart = new Map(cart)
                    newCart.delete(productFromMap.code);
                    return newCart;
                });
            } else {
                setCart((cart) =>{
                    var newCart = new Map(cart)
                    newCart.set(productFromMap.code, productFromMap)
                    return newCart;
                });
            }
         } 
    };

    const clearTheCart = () => {
        setCart(new Map());
    }
  
    return (
      <NestaDecorCartContext.Provider value={{ cart, addToCart, removeFromCart, getCountOf, getUnqueItemsByCount,updateToCart, getTotalCount, removeDecoreItemsByCode, cartEmptyMessage, clearTheCart}}>
        {children}
      </NestaDecorCartContext.Provider>
    );
  };