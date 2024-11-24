import React from "react";
import Image from "next/image";
import Rectangle12 from "../public/delivery_img/Rectangle12.png";
import Offer1_img from "../public/delivery_img/Offer1_img.png";
import Offer2_img from "../public/delivery_img/Offer2_img.png";
import arrow_right from "../public/delivery_img/arrow_right.png";

function Delivery() {
  return (
    <div className="xl:flex justify-center items-center gap-7 mt-20">
      <div className="relative mb-6 xl:mb-0">
        <Image
          src={Rectangle12}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Delivery Background Image"
        />
        <div className="absolute inset-0 bg-pink-100 opacity-90"></div>
        <div className="relative flex flex-col sm:flex-row justify-around items-center sm:items-end bottom-0 text-center sm:text-left px-2 sm:px-8 gap-10 h-full">
          <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center mt-12 sm:mt-0">
            <Image src={Offer1_img} alt="Offer 1 Image" />
          </div>
          <div className="order-2 sm:order-1 w-full sm:w-auto flex justify-center">
            <div className="mt-10 mb-10 text-center sm:text-left">
              <span className="bg-orange-300 text-white p-2 rounded">
                Free delivery
              </span>
              <h1 className="text-3xl pt-10">Free delivery over $50</h1>
              <p className="pt-6 pb-10 text-gray-400 flex flex-col">
                <span>Shop $50 product and get free</span>
                <span>delivery anywhere.</span>
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="flex justify-center items-center p-4 bg-green-600 rounded-sm text-white">
                  Shop Now
                  <Image src={arrow_right} alt="Arrow Icon" className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={Rectangle12}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Delivery Background Image"
        />
        <div className="absolute inset-0 bg-gray-100 opacity-90"></div>
        <div className="relative flex flex-col sm:flex-row justify-around items-center sm:items-end bottom-0 text-center sm:text-left sm:pl-3 xl:pl-8 gap-10 h-full">
          <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center mt-12 sm:mt-0">
            <Image src={Offer2_img} alt="Offer 2 Image" />
          </div>
          <div className="order-2 sm:order-1 w-full sm:w-auto flex justify-center">
            <div className="mt-10 mb-10 text-center sm:text-left">
              <span className="bg-orange-300 text-white p-2 rounded">
                60% off
              </span>
              <h1 className="text-3xl pt-10">Organic Food</h1>
              <p className="pt-6 pb-10 text-gray-400 flex flex-col">
                <span>Save up to 60% off on your</span>
                <span>first order</span>
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="flex justify-center items-center p-4 bg-green-600 rounded-sm text-white">
                  Order Now
                  <Image src={arrow_right} alt="Arrow Icon" className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
