import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingPage/Footer";


const fetchProductYouMayAlsoLikeAsync = () =>
  console.log("fetchProductYouMayAlsoLikeAsync called");
const selectProductYouMayAlsoLike = () => [];
const selectProducts = () => [];

const ShoppingFavouritePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-bold">
          Favourites feature is temporarily unavailable.
        </p>
        <button
          onClick={fetchProductYouMayAlsoLikeAsync}
          className="text-white py-4 my-4 bg-black rounded-3xl w-[90vw] font-bold"
        >
          Fetch Recommendations
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShoppingFavouritePage;
