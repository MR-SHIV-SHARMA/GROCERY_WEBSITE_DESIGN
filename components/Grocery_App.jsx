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
        <div className="relative flex justify-around items-center py-10">
          <div className="left-0">
            <h1 className="text-4xl font-bold w-80">
              Shop Faster With Groceyish App
            </h1>
            <p className="text-gray-400 py-6">
              Available on both IOS & Android
            </p>
            <div className="flex justify-center items-center">
              <Image src={img11} alt="IOS App" />
              <Image src={img12} alt="Android App" />
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={X_2}
              className="z-10 relative -left-52"
              alt="Overlay Image"
            />
            <Image
              src={X_1}
              className="absolute z-0 -right-10"
              alt="Base Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Grocery_App;
