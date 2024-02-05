import React, { createContext, useState, useContext,useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem('cartItem',JSON.stringify(updatedCart))

    setCart(updatedCart);
  };

  useEffect(()=>{
    if(cart.length > 0){
      localStorage.setItem('cartItem',JSON.stringify(cart))
    }
  },[cart])

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('cartItem'));
    setCart(items)
  },[])



// useEffect(() => {
//   localStorage.setItem('items', JSON.stringify(items));
// }, [items]);

  console.log('cartdata',cart)

  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
