import React from "react";
import Image from "next/image";
import X_1 from "../public/groceyish_app_img/X_1.png";
import X_2 from "../public/groceyish_app_img/X_2.png";
import img10 from "../public/groceyish_app_img/img10.png";
import img11 from "../public/groceyish_app_img/img11.png";
import img12 from "../public/groceyish_app_img/img12.png";

function Grocery_App() {
  return (
    <>
      <div className="relative mt-16">
        <Image
          src={img10}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Grocery App Background Image"
        />
        <div className="absolute inset-0 bg-teal-100 opacity-80"></div>
        <div className="relative flex flex-col sm:flex-row justify-around items-center md:gap-8 lg:gap-[15%] py-10">
          <div className="text-center sm:text-start md:text-center lg:text-left sm:pl-4 lg:pl-10 xl:pl-0 order-1 pt-6">
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold w-80 mx-auto lg:mx-0">
              Shop Faster With Groceyish App
            </h1>
            <p className="text-gray-400 py-3 sm:py-6">
              Available on both IOS & Android
            </p>
            <div className="flex justify-center sm:justify-start items-center">
              <Image src={img11} alt="IOS App" className="w-32 xl:w-auto" />
              <Image src={img12} alt="Android App" className="w-36 xl:w-auto" />
            </div>
          </div>
          <div className="relative flex justify-center items-center mt-8 md:mt-0 sm:order-2">
            <Image
              src={X_2}
              className="z-10 relative -left-[25%] sm:left-[-75%] mx-auto w-auto"
              alt="Overlay Image"
            />
            <Image
              src={X_1}
              className="absolute z-0 -right-[20%] sm:-right-[-10%] mx-auto w-[80%] sm:w-auto"
              alt="Base Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Grocery_App;
