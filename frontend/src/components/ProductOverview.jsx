import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductByIdAsync, selectSelectedProduct } from "../features/product/productSlice"; // Correct imports
import { RadioGroup } from "@headlessui/react";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";
import outlineHeart from "../assets/outline-heart.png";
import filledHeart from "../assets/filled-heart.png";
import { PakCurrency } from "../constants/services";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductOverview = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct); // Use the correct selector

  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAsync(id)); // Dispatch the action to fetch the product
    }
  }, [id, dispatch]);

  const addToCartHandler = () => {
    if (!isInCart) {
      if (selectedColor && selectedSize) {
        setIsInCart(true);
        alert("Item added to cart!");
      } else {
        alert("Select a size and color");
      }
    } else {
      alert("This item is already in the cart");
    }
  };

  const addToFavouriteHandler = () => {
    if (!isInCart) {
      if (selectedColor && selectedSize) {
        setIsFavorite(!isFavorite);
      } else {
        alert("Select a size and color");
      }
    } else {
      alert("Item already added in the cart");
    }
  };

  return (
    <>
      {product ? (
        <div className="px-5 md:px-12 w-full">
          <div className="wide md:flex md:px-4">
            <div className="viewImage md:flex md:w-4/6 hidden items-center justify-around h-fit">
              <div className="wide-first h-fit">
                {product.images &&
                  product.images.map((image, index) => (
                    <div
                      key={index}
                      className="border-2 hover:border-gray-400 my-2 transition-all duration-300 cursor-pointer rounded-lg p-3 md:w-fit"
                      onMouseOver={() => setCurrentImage(index)}
                    >
                      <img src={image} alt="" className="w-[3vw]" />
                    </div>
                  ))}
              </div>

              <div className="wide-second h-fit">
                <div className="">
                  <img
                    src={product.images && product.images[currentImage]}
                    className="h-[80vh] w-[35vw]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="wide-third md:overflow-y-auto md:w-2/6 md:px-4">
              <div className="first">
                <h1 className="text-lg font-Oswald">{product.title}</h1>
                {product.gender && <p>Gender: {product.gender}</p>}
                {product.kids && <p>Kids: {product.kids}</p>}
                <p className="mt-2 text-sm text-gray-700 font-semibold">
                  MRP : {PakCurrency}
                  {product.discountPrice}
                </p>
                <p className="cursor-pointer opacity-50">
                  incl. of taxes <br /> (Also includes all applicable duties)
                </p>
                <div className="md:hidden scroll-container scroll-smooth flex flex-row overflow-x-auto">
                  {product.images &&
                    product.images.map((image, index) => (
                      <div key={index} className="mx-2 text-left">
                        <img src={image} className="max-w-[90vw]" alt="" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="second-colors my-8">
                <h3 className="text-sm font-medium text-gray-900 my-4">Color</h3>
                <div className="flex space-x-4">
                  {product.colors &&
                    product.colors.map((color) => (
                      <div
                        key={color.name}
                        className={`${color.class} w-5 h-5 rounded-full cursor-pointer ${
                          selectedColor === color
                            ? "border-yellow-500 p-1"
                            : "border-black"
                        } border-2`}
                        onClick={() => setSelectedColor(color)}
                        title={`${color.name}`}
                        style={{
                          background: `${color.selectedClass}`,
                        }}
                      ></div>
                    ))}
                </div>
              </div>
              <div className="second mb-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <p className="text-sm font-medium opacity-80 text-black hover:opacity-100 cursor-pointer">
                      Size guide
                    </p>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size}
                          value={size}
                          className={({ active }) =>
                            classNames(
                              true
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-black" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                              {true ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-black"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="third my-2 space-y-4">
                <button
                  className="w-full bg-black text-white py-4 rounded-full hover:opacity-90"
                  onClick={addToCartHandler}
                >
                  Add to Bag
                </button>
                <button
                  className="w-full flex items-center justify-center border-2 border-black border-opacity-30 hover:border-opacity-100 py-4 rounded-full"
                  onClick={addToFavouriteHandler}
                >
                  <p className="mr-1">Favourite</p>
                  <img
                    src={isFavorite ? filledHeart : outlineHeart}
                    className="w-4"
                    alt="Favourite Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductOverview;
