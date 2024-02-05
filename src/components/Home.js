import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../CartContext";

const Home = () => {
  const { addToCart, removeFromCart, cart } = useCart();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data.map((product) => (
          <div className="rounded overflow-hidden shadow-lg" key={product.id}>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full h-48 object-cover"
                  src={product?.image}
                  alt="Sunset in the mountains"
                />
                <div
                  className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
                ></div>
              </a>
              <a href="#!">
                <div
                  className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {product.id}
                </div>
              </a>

              <a href="!#">
                <div
                  className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  <span className="font-bold">27</span>
                  <small>March</small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best {product.title}
              </a>
              <p className="text-gray-500 text-sm">The city that never sleeps</p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                onClick={() => addToCart(product)}
                className={`bg-indigo-600 px-4 py-2 text-white rounded hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out ${
                  cart.some((item) => item.id === product.id) && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={cart.some((item) => item.id === product.id)}
              >
                {cart.some((item) => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
              {cart.some((item) => item.id === product.id) && (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-600 px-4 py-2 text-white rounded ml-2 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out"
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
