import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const NestaDecorCartContext = createContext();

export const NestaDecorCartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        console.log("From Local Storage", localStorage.getItem('##cart'));
        const savedCart = new Map(JSON.parse(localStorage.getItem('##cart')));
        console.log("Saved CART", savedCart);
    return savedCart && Object.keys(savedCart).length===0 ? savedCart : new Map();
    });
    
    useEffect(() => {
        console.log("updating cart", JSON.stringify(Array.from(cart.entries())));
        localStorage.setItem('##cart',  JSON.stringify(Array.from(cart.entries())));
    }, [cart]);

    const firstMessage = "Your cart is awaiting your selections."
    const whenManuallyEmptyTheCart = "You have no items in your cart"

    const [cartEmptyMessage, updateCartEmptyMessage] = useState(firstMessage)
    
    const uniqueId = uuidv4();
    
    const addToCart = (product) => {    
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
        // Perform other side effects here if needed
      }, [cart]);
    
    const getCountOf = (product) => {
        var productFromCart =  cart.get(product.code)
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
        var count  = 0
        console.log("Value from the MAP ::: ",cart)
        
        cart.forEach((value, key) =>{
            // console.log("Value from the MAP ::: ",value)
            // console.log("key from the MAP ::: ",key)
            count += value.count
        })
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