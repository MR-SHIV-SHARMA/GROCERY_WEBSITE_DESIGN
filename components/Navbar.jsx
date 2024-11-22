import React from "react";
import Image from "next/image";
import Logo from "../public/Navbar_img/Logo.png";
import wishlist from "../public/Navbar_img/wishlist.png";
import shopping_cart from "../public/Navbar_img/shopping_cart.png";
import Down_arrow from "../public/Navbar_img/Down_arrow.png";
import search from "../public/Navbar_img/search.png";
import Profile from "../public/Navbar_img/Profile.png";
import Call from "../public/Navbar_img/Call.png";
import Home from "../public/Navbar_img/Home.png";
import Hot_deals from "../public/Navbar_img/Hot_deals.png";
import percent from "../public/Navbar_img/percent.png";
import megaphone from "../public/Navbar_img/megaphone.png";
import dot from "../public/Navbar_img/dot.png";

function Navbar() {
  return (
    <div className="">
      <div className="flex justify-evenly items-center py-3">
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="Groceyish logo" />
          <div className="ml-2">
            <h1 className="font-bold text-2xl text-green-600">Groceyish</h1>
            <p className="text-xs text-gray-400">GROCERY</p>
          </div>
        </div>
        <div className="bg-gray-200 pl-4">
          <div className="flex justify-center items-center">
            <div className="text-sm flex justify-center items-center gap-2">
              All Categories
              <Image src={Down_arrow} alt="down arrow" />
            </div>
            <p className="px-2 text-gray-500"> | </p>
            <input
              type="text"
              placeholder="Search for items..."
              className="bg-gray-200 text-sm pl-1"
            />
            <div className="py-2 px-5 bg-green-700">
              <Image src={search} alt="search icon" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={wishlist} alt="wishlist icon" />
          <h1 className="text-xs">Wishlist</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={shopping_cart} alt="shopping cart icon" />
          <div>
            <h1 className="text-xs">My Cart</h1>
            <p className="text-green-600">$21</p>
          </div>
          <Image src={Down_arrow} alt="down arrow" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={Profile} alt="profile icon" />
          <h1 className="flex justify-center items-center gap-2">
            Ramzi Cherif <Image src={Down_arrow} alt="down arrow" />
          </h1>
        </div>
      </div>
      <div className="border-t border-gray-200" />
      <div className="flex justify-evenly items-center py-3">
        <div className="bg-green-600 px-4 py-2 text-white flex justify-center items-center rounded-sm">
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
          <h1 className="pl-2 text-sm">Brows All Categories</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={Home} alt="home icon" />
          <h1 className="text-sm">Home</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={Hot_deals} alt="hot deals icon" />
          <h1 className="text-sm">Hot Deals</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={percent} alt="percent icon" />
          <h1 className="text-sm">Promotions</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={megaphone} alt="megaphone icon" />
          <h1 className="text-sm">New products</h1>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Call} alt="call icon" />
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
  );
}

export default Navbar;
