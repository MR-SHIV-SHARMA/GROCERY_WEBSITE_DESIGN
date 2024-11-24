import React from "react";
import Image from "next/image";
import Star from "../public/Top_Sells_img/Star.png";
import image_1 from "../public/Top_Sells_img/image_1.png";
import image_2 from "../public/Top_Sells_img/image_2.png";
import image_3 from "../public/Top_Sells_img/image_3.png";
import image_4 from "../public/Top_Sells_img/image_4.png";
import image_5 from "../public/Top_Sells_img/image_5.png";
import image_6 from "../public/Top_Sells_img/image_6.png";
import image_7 from "../public/Top_Sells_img/image_7.png";
import Black_Star from "../public/Top_Sells_img/Black_Star.png";

// Reusable Product Card component
const ProductCard = ({ image, name, price, oldPrice, rating }) => {
  const stars = Array(5).fill(Star); // By default, show 5 stars
  const filledStars = stars.slice(0, rating); // Slice to show the correct number of stars
  const blackStars = Array(5 - rating).fill(Black_Star); // Fill the remaining stars with black stars

  return (
    <div className="flex items-center space-x-4 sm:space-x-6 hover:scale-105 transition-all">
      <Image
        src={image}
        alt={name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
      />
      <div>
        <h3 className="text-sm sm:text-base font-semibold">{name}</h3>
        <div className="flex text-gray-400 items-center">
          {filledStars.map((star, index) => (
            <Image key={index} src={star} alt="star" />
          ))}
          {blackStars.map((star, index) => (
            <Image
              key={index + filledStars.length}
              src={star}
              alt="black star"
            />
          ))}
          <span className="ml-2">({rating})</span>
        </div>
        <div className="flex gap-2 mt-2">
          <p className="text-green-500 font-bold text-xs sm:text-sm">
            ${price}
          </p>
          <p className="text-gray-400 line-through text-xs sm:text-sm">
            ${oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

function Top_Sells() {
  const sections = [
    {
      title: "Top Sells",
      items: [
        {
          image: image_5,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_2,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_3,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
      ],
    },
    {
      title: "Top Rated",
      items: [
        {
          image: image_1,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_2,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_4,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
      ],
    },
    {
      title: "Trending Items",
      items: [
        {
          image: image_7,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_6,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_5,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
      ],
    },
    {
      title: "Recently Added",
      items: [
        {
          image: image_4,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_7,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
        {
          image: image_3,
          name: "Orange 1kg",
          price: 2,
          oldPrice: 3.99,
          rating: 4,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto pl-4 md:pl-16 pr-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              {section.title}
            </h2>
            <div className="border-t-4 border-green-600 w-16 mb-4"></div>
            {section.items.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top_Sells;

// import React from "react";
// import Image from "next/image";
// import Logo from "../public/Navbar_img/Logo.png";
// import wishlist from "../public/Navbar_img/wishlist.png";
// import shopping_cart from "../public/Navbar_img/shopping_cart.png";
// import Down_arrow from "../public/Navbar_img/Down_arrow.png";
// import search from "../public/Navbar_img/search.png";
// import Profile from "../public/Navbar_img/Profile.png";
// import Call from "../public/Navbar_img/Call.png";
// import Home from "../public/Navbar_img/Home.png";
// import Hot_deals from "../public/Navbar_img/Hot_deals.png";
// import percent from "../public/Navbar_img/percent.png";
// import megaphone from "../public/Navbar_img/megaphone.png";
// import dot from "../public/Navbar_img/dot.png";

// function Navbar() {
//   return (
//     <div className="">
//       <div className="flex justify-evenly items-center py-3">
//         <div className="flex justify-center items-center px-2 lg:px-0">
//           <Image src={Logo} alt="Groceyish logo" />
//           <div className="ml-2 hidden lg:block">
//             <h1 className="font-bold text-2xl text-green-600">Groceyish</h1>
//             <p className="text-xs text-gray-400">GROCERY</p>
//           </div>
//         </div>
//         <div className="bg-gray-200 pl-4">
//           <div className="flex justify-center items-center">
//             <div className="text-sm flex justify-center items-center gap-2">
//               All <span className="hidden xs:block">Categories</span>
//               <Image src={Down_arrow} alt="down arrow" />
//             </div>
//             <p className="px-2 text-gray-500"> | </p>
//             <input
//               type="text"
//               placeholder="Search for items..."
//               className="bg-gray-200 text-sm pl-1 hidden 2xs:block"
//             />
//             <div className="py-2 px-5 bg-green-700">
//               <Image src={search} alt="search icon" />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center gap-2 px-2 lg:px-0">
//           <Image src={wishlist} alt="wishlist icon" />
//           <h1 className="text-xs hidden lg:block">Wishlist</h1>
//         </div>
//         <div className="flex justify-center items-center gap-2 ">
//           <Image src={shopping_cart} alt="shopping cart icon" />
//           <div className="hidden lg:block">
//             <div className="flex justify-center items-center gap-2 ">
//               <div>
//                 <h1 className="text-xs">My Cart</h1>
//                 <p className="text-green-600">$21</p>
//               </div>
//               <Image src={Down_arrow} alt="down arrow" />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center gap-2 px-2 lg:px-0">
//           <Image src={Profile} alt="profile icon" />
//           <h1 className="flex justify-center items-center gap-2 hidden lg:block">
//             Ramzi Cherif <Image src={Down_arrow} alt="down arrow" />
//           </h1>
//         </div>
//       </div>
//       <div className="border-t border-gray-200" />
//       <div className="flex justify-evenly items-center py-3">
//         <div className="hidden sm:block">
//           <div className="bg-green-600 px-4 py-2 text-white flex justify-center items-center rounded-sm">
//             <div className="justify-center items-center space-y-1">
//               <div className="flex justify-center items-center gap-1">
//                 <Image src={dot} alt="dot icon" />
//                 <Image src={dot} alt="dot icon" />
//               </div>
//               <div className="flex justify-center items-center gap-1">
//                 <Image src={dot} alt="dot icon" />
//                 <Image src={dot} alt="dot icon" />
//               </div>
//             </div>
//             <h1 className="pl-2 text-sm">Brows All Categories</h1>
//           </div>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <Image src={Home} alt="home icon" />
//           <h1 className="text-sm hidden xs:block">Home</h1>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <Image src={Hot_deals} alt="hot deals icon" />
//           <h1 className="text-sm hidden xs:block">Hot Deals</h1>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <Image src={percent} alt="percent icon" />
//           <h1 className="text-sm hidden xs:block">Promotions</h1>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <Image src={megaphone} alt="megaphone icon" />
//           <h1 className="text-sm hidden xs:block">New products</h1>
//         </div>
//         <div className="flex justify-center items-center">
//           <Image src={Call} alt="call icon" />
//           <div className="hidden lg:block ">
//             <div className="flex justify-center items-center gap-2">
//               <h1 className="text-green-400 font-semibold text-base">
//                 1233-7777
//               </h1>
//               <p className="text-xs">24/7</p>
//               <p className="text-xs">support center</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
