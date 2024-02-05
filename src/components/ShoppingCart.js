import React from "react";
import { useCart } from "../CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h2>Your Shopping Cart</h2>
      {Array.isArray(cart) && cart.length > 0 ? (
        <div class="bg-gray-100 h-screen py-8">
          <div class="container mx-auto px-4">
            <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                    <thead>
                      <tr>
                        <th class="text-left font-semibold">Product</th>
                        <th class="text-left font-semibold">Price</th>
                        <th class="text-left font-semibold">Quantity</th>
                        <th class="text-left font-semibold">Total</th>
                        <th class="text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((product) => (
                        <tr key={product.id}>
                          <td class="py-4">
                            <div class="flex items-center">
                              <img
                                class="h-16 w-16 mr-4"
                                src={product.image}
                                alt="Product image"
                              />
                              <span class="font-semibold">{product.title}</span>
                            </div>
                          </td>
                          <td class="py-4">{`$${product.price.toFixed(2)}`}</td>
                          <td class="py-4">
                            <div class="flex items-center">
                              <button class="border rounded-md py-2 px-4 mr-2">-</button>
                              <span class="text-center w-8">1</span>
                              <button class="border rounded-md py-2 px-4 ml-2">+</button>
                            </div>
                          </td>
                          <td class="py-4">{`$${(product.price * 1).toFixed(2)}`}</td>
                          <td class="py-4">
                            <button
                              onClick={() => handleRemoveFromCart(product.id)}
                              class="text-red-500 hover:text-red-700"
                            >
                             <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-lg font-semibold mb-4">Summary</h2>
                  <div class="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>{`$${cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}`}</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>$1.99</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr class="my-2" />
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">{`$${cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}`}</span>
                  </div>
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
