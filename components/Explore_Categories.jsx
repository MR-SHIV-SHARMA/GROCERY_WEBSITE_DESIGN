"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow_left from "../public/Explore_Categories_img/arrow_left.png";
import arrow_right from "../public/Explore_Categories_img/arrow_right.png";
import image_1 from "../public/Explore_Categories_img/image_1.png";
import image_2 from "../public/Explore_Categories_img/image_2.png";
import image_3 from "../public/Explore_Categories_img/image_3.png";
import image_4 from "../public/Explore_Categories_img/image_4.png";
import image_5 from "../public/Explore_Categories_img/image_5.png";
import image_6 from "../public/Explore_Categories_img/image_6.png";
import image_7 from "../public/Explore_Categories_img/image_7.png";

// Sample JSON Data (With Categories)
const categories = [
  {
    id: 1,
    name: "Peach",
    items: 20,
    bgColor: "bg-gray-400",
    image: image_1,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Apple",
    items: 15,
    bgColor: "bg-red-400",
    image: image_2,
    category: "Fruits",
  },
  {
    id: 3,
    name: "Orange",
    items: 25,
    bgColor: "bg-orange-400",
    image: image_3,
    category: "Fruits",
  },
  {
    id: 4,
    name: "Banana",
    items: 30,
    bgColor: "bg-yellow-400",
    image: image_4,
    category: "Fruits",
  },
  {
    id: 5,
    name: "Carrot",
    items: 10,
    bgColor: "bg-green-400",
    image: image_5,
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Blueberry",
    items: 18,
    bgColor: "bg-blue-400",
    image: image_6,
    category: "Fruits",
  },
  {
    id: 7,
    name: "Chicken",
    items: 12,
    bgColor: "bg-indigo-400",
    image: image_7,
    category: "Meat",
  },
  {
    id: 8,
    name: "Lettuce",
    items: 20,
    bgColor: "bg-gray-300",
    image: image_1,
    category: "Vegetables",
  },
  {
    id: 9,
    name: "Tea",
    items: 15,
    bgColor: "bg-red-300",
    image: image_2,
    category: "Coffee & Teas",
  },
  {
    id: 10,
    name: "Coffee",
    items: 25,
    bgColor: "bg-orange-300",
    image: image_3,
    category: "Coffee & Teas",
  },
  {
    id: 11,
    name: "Beef",
    items: 40,
    bgColor: "bg-purple-400",
    image: image_4,
    category: "Meat",
  },
  {
    id: 12,
    name: "Broccoli",
    items: 22,
    bgColor: "bg-green-300",
    image: image_5,
    category: "Vegetables",
  },
  {
    id: 13,
    name: "Strawberry",
    items: 35,
    bgColor: "bg-pink-400",
    image: image_6,
    category: "Fruits",
  },
  {
    id: 14,
    name: "Spinach",
    items: 14,
    bgColor: "bg-teal-400",
    image: image_7,
    category: "Vegetables",
  },
  {
    id: 15,
    name: "Lamb",
    items: 28,
    bgColor: "bg-indigo-300",
    image: image_1,
    category: "Meat",
  },
  {
    id: 16,
    name: "Cucumber",
    items: 18,
    bgColor: "bg-green-500",
    image: image_2,
    category: "Vegetables",
  },
  {
    id: 17,
    name: "Raspberry",
    items: 20,
    bgColor: "bg-pink-500",
    image: image_3,
    category: "Fruits",
  },
  {
    id: 18,
    name: "Tomato",
    items: 24,
    bgColor: "bg-red-500",
    image: image_4,
    category: "Vegetables",
  },
  {
    id: 19,
    name: "Turkey",
    items: 16,
    bgColor: "bg-brown-400",
    image: image_5,
    category: "Meat",
  },
  {
    id: 20,
    name: "Mango",
    items: 19,
    bgColor: "bg-yellow-500",
    image: image_6,
    category: "Fruits",
  },
  {
    id: 21,
    name: "Celery",
    items: 23,
    bgColor: "bg-green-200",
    image: image_7,
    category: "Vegetables",
  },
  {
    id: 22,
    name: "Shrimp",
    items: 32,
    bgColor: "bg-orange-500",
    image: image_1,
    category: "Meat",
  },
  {
    id: 23,
    name: "Avocado",
    items: 15,
    bgColor: "bg-green-600",
    image: image_2,
    category: "Vegetables",
  },
  {
    id: 24,
    name: "Papaya",
    items: 18,
    bgColor: "bg-yellow-300",
    image: image_3,
    category: "Fruits",
  },
  {
    id: 25,
    name: "Fish",
    items: 26,
    bgColor: "bg-blue-600",
    image: image_4,
    category: "Meat",
  },
];

function Explore_Categories() {
  const [currentIndex, setCurrentIndex] = useState(0); // To track the visible cards
  const [selectedCategory, setSelectedCategory] = useState("All"); // For filtering
  const itemsPerPage = 7; // Number of cards visible at a time

  // Filtered data based on the selected category
  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((category) => category.category === selectedCategory);

  // Handle Left and Right Arrows
  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < filteredCategories.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Sliced data for the visible set of cards
  const visibleCategories = filteredCategories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="pt-6">
      {/* Header Section */}
      <div className="flex justify-between px-24 py-6">
        <h1 className="font-bold text-3xl">Explore Categories</h1>
        <div className="flex space-x-6">
          {["All", "Vegetables", "Fruits", "Coffee & Teas", "Meat"].map(
            (cat) => (
              <h1
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0); // Reset to first page when category changes
                }}
                className={`cursor-pointer ${
                  selectedCategory === cat ? "text-green-500 font-semibold" : ""
                }`}
              >
                {cat}
              </h1>
            )
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex justify-between items-center">
        {/* Left Arrow */}
        <div
          className="cursor-pointer justify-center items-center ml-6"
          onClick={handleScrollLeft}
        >
          <Image
            src={arrow_left}
            className="bg-gray-300 rounded-full p-2 h-10 w-10"
            alt="Scroll Left"
          />
        </div>

        {/* Cards */}
        <div className="flex space-x-5">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} px-6 py-6 rounded-lg`}
            >
              <Image src={category.image} alt={category.name} />
              <div className="text-center">
                <h1 className="text-lg font-semibold">{category.name}</h1>
                <p className="text-sm text-gray-700">{category.items} items</p>
              </div>{" "}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className="cursor-pointer justify-center items-center mr-6"
          onClick={handleScrollRight}
        >
          <Image
            src={arrow_right}
            className="bg-gray-300 rounded-full p-2 h-10 w-10"
            alt="Scroll Right"
          />
        </div>
      </div>
    </div>
  );
}

export default Explore_Categories;
