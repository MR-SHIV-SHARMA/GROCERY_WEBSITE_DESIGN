"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import dot from "../public/Navbar_img/dot.png";
import Call from "../public/Navbar_img/Call.png";
import Logo from "../public/Navbar_img/Logo.png";
import Home from "../public/Navbar_img/Home.png";
import search from "../public/Navbar_img/search.png";
import Profile from "../public/Navbar_img/Profile.png";
import percent from "../public/Navbar_img/percent.png";
import wishlist from "../public/Navbar_img/wishlist.png";
import Hot_deals from "../public/Navbar_img/Hot_deals.png";
import megaphone from "../public/Navbar_img/megaphone.png";
import Down_arrow from "../public/Navbar_img/Down_arrow.png";
import shopping_cart from "../public/Navbar_img/shopping_cart.png";

function Navbar() {
  const [activeButton, setActiveButton] = useState("Home"); // Default active button
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // For Categories Dropdown
  const [likes, setLikes] = useState(99); // Wishlist counter
  const [cartTotal, setCartTotal] = useState(21); // Cart total

  const categories = ["Fruits", "Vegetables", "Snacks", "Beverages", "Dairy"]; // Example categories

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName) =>
    `flex justify-center items-center xs:gap-0 2xs:gap-2 ${
      activeButton === buttonName
        ? "text-green-600 font-semibold"
        : "text-gray-500"
    }`;

  // Toggle Categories Dropdown
  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-2">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image src={Logo} alt="Groceyish logo" />
            <div className="ml-2 hidden md:block">
              <h1 className="font-bold text-2xl text-green-600">Groceyish</h1>
              <p className="text-xs text-gray-400">GROCERY</p>
            </div>
          </div>
        </Link>

        <div className="relative bg-gray-200 pl-4">
          <div className="flex justify-center items-center">
            <button
              className="text-sm flex justify-center items-center gap-2"
              onClick={toggleCategoriesDropdown}
            >
              All <span className="hidden xs:block">Categories</span>
              <Image src={Down_arrow} alt="down arrow" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md mt-2 rounded-lg p-3 z-10">
                {categories.map((category) => (
                  <p
                    key={category}
                    className="text-gray-700 hover:text-green-600 cursor-pointer py-1"
                  >
                    {category}
                  </p>
                ))}
              </div>
            )}

            <p className="px-2 text-gray-500">|</p>
            <input
              type="text"
              placeholder="Search for items..."
              className="bg-gray-200 text-sm pl-1 hidden 2xs:block"
            />
            <button className="py-2 px-5 bg-green-700">
              <Image src={search} alt="search icon" />
            </button>
          </div>
        </div>

        <div className="relative inline-block">
          <button onClick={() => setLikes(likes + 1)} className="flex">
            <div className="relative">
              <Image src={wishlist} alt="wishlist icon" />
              <span className="absolute bottom-2 -right-2 bg-red-500 text-white text-xs font-mono rounded-full p-0.5 flex justify-center items-center">
                {likes}
              </span>
            </div>
            <div className="pl-2 hidden lg:block text-sm">Wishlist</div>
          </button>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link href="/cart">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image src={shopping_cart} alt="shopping cart icon" />
                <span className="absolute bottom-4 -right-1 bg-red-500 text-white text-xs font-mono rounded-full p-0.5 flex justify-center items-center">
                  {likes}
                </span>
              </div>
              <div className="hidden lg:block">
                <h1 className="text-xs">My Cart</h1>
                <p className="text-green-600">${cartTotal}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link href="/profile">
            <div className="flex items-center gap-2">
              <Image src={Profile} alt="profile icon" />
              <h1 className="hidden lg:block">Ramzi Cherif</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-200" />
      <div className="flex justify-between items-center py-2">
        <div className="hidden sm:block">
          <button
            onClick={toggleCategoriesDropdown}
            className="bg-green-600 px-4 py-2 text-white flex justify-center items-center rounded-sm"
          >
            <div className="justify-center items-center space-y-1">
              <div className="flex justify-center items-center gap-1">
                <Image src={dot} alt="dot icon" />
                <Image src={dot} alt="dot icon" />
              </div>
              <div className="flex justify-center items-center gap-1">
                <Image src={dot} alt="dot icon" />
                <Image src={dot} alt="dot icon" />
              </div>
            </div>
            <h1 className="pl-2 text-sm">Browse All Categories</h1>
          </button>
        </div>
        <button
          className={buttonStyle("Home")}
          onClick={() => handleButtonClick("Home")}
        >
          <Image src={Home} alt="home icon" />
          <h1 className="text-sm hidden xs:block">Home</h1>
        </button>
        <button
          className={buttonStyle("Hot Deals")}
          onClick={() => handleButtonClick("Hot Deals")}
        >
          <Image src={Hot_deals} alt="hot deals icon" />
          <h1 className="text-sm hidden xs:block">Hot Deals</h1>
        </button>
        <button
          className={buttonStyle("Promotions")}
          onClick={() => handleButtonClick("Promotions")}
        >
          <Image src={percent} alt="percent icon" />
          <h1 className="text-sm hidden xs:block">Promotions</h1>
        </button>
        <button
          className={buttonStyle("New Products")}
          onClick={() => handleButtonClick("New Products")}
        >
          <Image src={megaphone} alt="megaphone icon" />
          <h1 className="text-sm hidden xs:block">New products</h1>
        </button>
        <div className="flex justify-center items-center">
          <Image src={Call} alt="call icon" />
          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-green-400 font-semibold text-base">
                1233-7777
              </h1>
              <p className="text-xs">24/7</p>
              <p className="text-xs">support center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
