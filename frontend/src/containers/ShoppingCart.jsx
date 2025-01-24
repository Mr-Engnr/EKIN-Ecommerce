import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingPage/Footer";

const addToCartAsync = () => console.log("addToCartAsync called");
const deleteFromCartAsync = () => console.log("deleteFromCartAsync called");
const selectCartItems = () => [];
const updateCartAsync = () => console.log("updateCartAsync called");
const fetchProductYouMayAlsoLikeAsync = () =>
  console.log("fetchProductYouMayAlsoLikeAsync called");
const selectProductYouMayAlsoLike = () => [];
const selectProducts = () => [];

const ShoppingCartPage = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-bold">
          Shopping Cart feature is temporarily unavailable.
        </p>
        <button
          onClick={addToCartAsync}
          className="text-white py-4 my-4 bg-black rounded-3xl w-[90vw] font-bold"
        >
          Add to Cart 
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShoppingCartPage;
