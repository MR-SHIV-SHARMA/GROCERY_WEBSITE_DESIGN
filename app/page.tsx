import React from "react";
import Home from "../components/Home";
import Explore_Categories from "../components/Explore_Categories";
import Featured_Products from "../components/Featured_Products";
import Delivery from "../components/Delivery";
import Grocery_App from "../components/Grocery_App";
import Best_sells from "../components/Best_sells";
import Top_Sells from "../components/Top_Sells";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Home />
      <Explore_Categories />
      <Featured_Products />
      <Delivery />
      <Best_sells />
      <Top_Sells />
      <Grocery_App />
      <Footer />
    </>
  );
}

export default page;
