import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesAsync,
  fetchColorsAsync,
  fetchSizesAsync,
} from "./features/product/productSlice";

import ProductOverviewPage from "./pages/ProductOverviewPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { checkUserAsync, selectLogginUser } from "./features/auth/authSlice";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ShoppingFavouritePage from "./pages/ShoppingFavouritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/productOverview/:id",
    element: <ProductOverviewPage></ProductOverviewPage>,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCartPage></ShoppingCartPage>,
  },
  {
    path: "/shoppingFavourite",
    element: <ShoppingFavouritePage></ShoppingFavouritePage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLogginUser);
  
  useEffect(() => {
    dispatch(checkUserAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchColorsAsync());
    dispatch(fetchSizesAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;