'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import arrow_left from '../public/Featured_Products_img/arrow_left.png';
import arrow_right from '../public/Featured_Products_img/arrow_right.png';
import Rectangle1 from '../public/Featured_Products_img/Rectangle1.png';
import Rectangle2 from '../public/Featured_Products_img/Rectangle2.png';
import Rectangle3 from '../public/Featured_Products_img/Rectangle3.png';
import Rectangle4 from '../public/Featured_Products_img/Rectangle4.png';
import Rectangle5 from '../public/Featured_Products_img/Rectangle5.png';
import shopping_cart from '../public/Featured_Products_img/shopping_cart.png';
import Star from '../public/Featured_Products_img/Star.png';
import Black_Star from '../public/Featured_Products_img/Black_Star.png';

// Sample JSON Data (With Categories)
const categories = [
  {
    id: 1,
    name: 'Peach',
    items: 20,
    price: 1.25,
    originalPrice: 1.99,
    rating: 4.5,
    image: Rectangle1,
    seller: 'Mr. Food',
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Apple',
    items: 15,
    price: 1.5,
    originalPrice: 2.0,
    rating: 4.7,
    image: Rectangle2,
    seller: 'Farm Fresh',
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Orange',
    items: 25,
    price: 1.1,
    originalPrice: 1.75,
    rating: 4.3,
    image: Rectangle3,
    seller: 'Citrus Delight',
    category: 'Fruits',
  },
  {
    id: 4,
    name: 'Carrot',
    items: 30,
    price: 0.75,
    originalPrice: 1.0,
    rating: 4.6,
    image: Rectangle4,
    seller: 'Healthy Roots',
    category: 'Vegetables',
  },
  {
    id: 5,
    name: 'Spinach',
    items: 50,
    price: 1.2,
    originalPrice: 1.6,
    rating: 4.8,
    image: Rectangle5,
    seller: 'Leafy Greens',
    category: 'Vegetables',
  },
  {
    id: 6,
    name: 'Tea',
    items: 100,
    price: 3.5,
    originalPrice: 4.5,
    rating: 4.9,
    image: Rectangle1,
    seller: 'Tea Time',
    category: 'Coffee & Teas',
  },
  {
    id: 7,
    name: 'Coffee',
    items: 90,
    price: 5.0,
    originalPrice: 6.5,
    rating: 4.7,
    image: Rectangle2,
    seller: 'Brewed Bliss',
    category: 'Coffee & Teas',
  },
  {
    id: 8,
    name: 'Chicken Breast',
    items: 40,
    price: 6.0,
    originalPrice: 7.5,
    rating: 4.5,
    image: Rectangle3,
    seller: 'Meat & More',
    category: 'Meat',
  },
  {
    id: 9,
    name: 'Beef Steak',
    items: 20,
    price: 10.0,
    originalPrice: 12.5,
    rating: 4.6,
    image: Rectangle4,
    seller: 'Meat & More',
    category: 'Meat',
  },
  {
    id: 10,
    name: 'Pineapple',
    items: 15,
    price: 2.5,
    originalPrice: 3.0,
    rating: 4.4,
    image: Rectangle5,
    seller: 'Tropical Treats',
    category: 'Fruits',
  },
];

function Featured_Products() {
  const [currentIndex, setCurrentIndex] = useState(0); // To track the visible cards
  const [selectedCategory, setSelectedCategory] = useState('All'); // For filtering
  const itemsPerPage = 5; // Number of cards visible at a time

  // Filtered data based on the selected category
  const filteredCategories =
    selectedCategory === 'All'
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
        <h1 className="font-bold text-3xl">Featured Products</h1>
        <div className="flex space-x-6">
          {['All', 'Vegetables', 'Fruits', 'Coffee & Teas', 'Meat'].map(
            (cat) => (
              <h1
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0); // Reset to first page when category changes
                }}
                className={`cursor-pointer ${
                  selectedCategory === cat ? 'text-green-500 font-semibold' : ''
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
              className="flex flex-col items-center rounded-lg border-2 px-6 pt-6"
              style={{
                width: '216px', // Fixed width
                height: '280px', // Fixed height
              }}
            >
              {/* Centered Image */}
              <Image
                src={category.image}
                alt={category.name}
                className="object-cover mx-auto"
              />
              {/* Text Content - Aligned to Start */}
              <div className="w-full mt-4 text-left">
                <p className="text-xs text-gray-400">{category.category}</p>
                <h1 className="text-lg font-semibold">{category.name}</h1>
                <p className="text-gray-400 text-sm flex justify-start items-center">
                  {/* Dynamic Star Ratings */}
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index < Math.floor(category.rating)) {
                      return (
                        <Image
                          key={index}
                          src={Star} // Filled star for full rating
                          alt="Filled Star"
                          width={16}
                          height={16}
                        />
                      );
                    } else if (
                      index < category.rating &&
                      category.rating - Math.floor(category.rating) >= 0.5
                    ) {
                      return (
                        <Image
                          key={index}
                          src={Star} // Half-star logic: You can customize a half-star icon
                          alt="Half Star"
                          width={16}
                          height={16}
                        />
                      );
                    } else {
                      return (
                        <Image
                          key={index}
                          src={Black_Star} // Empty star
                          alt="Empty Star"
                          width={16}
                          height={16}
                        />
                      );
                    }
                  })}
                  <span className="ml-1">({category.rating})</span>
                </p>
                <p className="text-sm">
                  By <span className="text-green-500">{category.seller}</span>
                </p>
                <div className="flex justify-between items-center w-full mt-2 gap-2">
                  <div className="flex gap-2">
                    <p className="text-green-500 font-semibold">
                      ${category.price}
                    </p>
                    <p className="text-gray-400 line-through">
                      ${category.originalPrice}
                    </p>
                  </div>
                  <button className="bg-green-200 py-1 px-6 rounded-md flex justify-center items-center gap-1">
                    <Image src={shopping_cart} className="h-6 w-6" />
                    <p className="text-green-500 text-sm">Add</p>
                  </button>
                </div>
              </div>
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

export default Featured_Products;
