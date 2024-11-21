'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import arrow_left from '../public/best_sells_img/arrow_left.png';
import arrow_right from '../public/best_sells_img/arrow_right.png';
import Star from '../public/best_sells_img/Star.png';
import Black_Star from '../public/best_sells_img/Black_Star.png';
import shopping_cart_white from '../public/best_sells_img/shopping_cart_white.png';
import Rectangle12 from '../public/best_sells_img/Rectangle12.png';

// Updated JSON data with filter attributes
const categories = [
  {
    id: 1,
    name: 'Coffe 1kg',
    totalItems: 50,
    remainingItems: 20,
    price: 1.25,
    originalPrice: 1.99,
    rating: 4.5,
    image: '/best_sells_img/img1.png',
    seller: 'Mr. Food',
    category: 'Fruits',
    featured: true,
    popular: false,
    new: true,
    bestDeals: true,
    savePercentage: 10,
  },
  {
    id: 2,
    name: 'Halal Sausage 350g',
    totalItems: 40,
    remainingItems: 25,
    price: 1.5,
    originalPrice: 2.0,
    rating: 4.7,
    image: '/best_sells_img/img2.png',
    seller: 'Farm Fresh',
    category: 'Fruits',
    featured: false,
    popular: true,
    new: false,
    bestDeals: false,
    savePercentage: 10,
  },
  {
    id: 3,
    name: 'Green Tea 250g',
    totalItems: 60,
    remainingItems: 30,
    price: 1.1,
    originalPrice: 1.75,
    rating: 4.3,
    image: '/best_sells_img/img3.png',
    seller: 'Citrus Delight',
    category: 'Fruits',
    featured: true,
    popular: true,
    new: true,
    bestDeals: true,
    savePercentage: 15,
  },
  {
    id: 4,
    name: 'Onion 1kg',
    totalItems: 80,
    remainingItems: 55,
    price: 0.75,
    originalPrice: 1.0,
    rating: 4.6,
    image: '/best_sells_img/img4.png',
    seller: 'Healthy Roots',
    category: 'Vegetables',
    featured: false,
    popular: true,
    new: false,
    bestDeals: false,
    savePercentage: 20,
  },
  {
    id: 5,
    name: 'Apple 1kg',
    totalItems: 100,
    remainingItems: 80,
    price: 2.5,
    originalPrice: 3.0,
    rating: 4.8,
    image: '/best_sells_img/img5.png',
    seller: 'Fresh Fruits',
    category: 'Fruits',
    featured: true,
    popular: false,
    new: true,
    bestDeals: true,
    savePercentage: 12,
  },
  {
    id: 6,
    name: 'Carrot 1kg',
    totalItems: 60,
    remainingItems: 40,
    price: 1.2,
    originalPrice: 1.5,
    rating: 4.0,
    image: '/best_sells_img/img6.png',
    seller: 'Green Farms',
    category: 'Vegetables',
    featured: false,
    popular: true,
    new: false,
    bestDeals: false,
    savePercentage: 5,
  },
  {
    id: 7,
    name: 'Banana 1kg',
    totalItems: 120,
    remainingItems: 100,
    price: 1.0,
    originalPrice: 1.5,
    rating: 4.6,
    image: '/best_sells_img/img7.png',
    seller: 'Tropical Fresh',
    category: 'Fruits',
    featured: true,
    popular: true,
    new: true,
    bestDeals: false,
    savePercentage: 10,
  },
  {
    id: 8,
    name: 'Spinach 500g',
    totalItems: 50,
    remainingItems: 35,
    price: 1.5,
    originalPrice: 2.0,
    rating: 4.4,
    image: '/best_sells_img/img8.png',
    seller: 'Healthy Greens',
    category: 'Vegetables',
    featured: false,
    popular: false,
    new: false,
    bestDeals: true,
    savePercentage: 20,
  },
  {
    id: 9,
    name: 'Tomato 1kg',
    totalItems: 80,
    remainingItems: 60,
    price: 1.0,
    originalPrice: 1.3,
    rating: 4.7,
    image: '/best_sells_img/img9.png',
    seller: 'Farm Fresh',
    category: 'Vegetables',
    featured: true,
    popular: true,
    new: true,
    bestDeals: false,
    savePercentage: 8,
  },
  {
    id: 10,
    name: 'Lemon 500g',
    totalItems: 50,
    remainingItems: 30,
    price: 1.75,
    originalPrice: 2.0,
    rating: 4.2,
    image: '/best_sells_img/img10.png',
    seller: 'Citrus Delight',
    category: 'Fruits',
    featured: false,
    popular: true,
    new: false,
    bestDeals: true,
    savePercentage: 10,
  },
];

function BestSells() {
  const [currentIndex, setCurrentIndex] = useState(0); // To track the visible cards
  const [selectedFilter, setSelectedFilter] = useState('All'); // For filtering
  const itemsPerPage = 4; // Number of cards visible at a time

  // Filter the categories based on the selected filter
  const filteredCategories = categories.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return item.featured;
    if (selectedFilter === 'Popular') return item.popular;
    if (selectedFilter === 'New') return item.new;
    return true;
  });

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
    <>
      <div className="px-24 mt-20">
        <div className="flex justify-between items-center space-x-10">
          <div className="flex justify-start items-center space-x-10">
            <h1 className="text-3xl font-semibold text-gray-600">
              Daily Best Sells
            </h1>
            <div className="flex justify-center items-center space-x-10 text-gray-800">
              {['All', 'Featured', 'Popular', 'New'].map((filter) => (
                <div
                  key={filter}
                  className={`cursor-pointer hover:text-gray-900 ${
                    selectedFilter === filter ? 'text-green-500 font-bold' : ''
                  }`}
                  onClick={() => {
                    setSelectedFilter(filter);
                    setCurrentIndex(0); // Reset the index when the filter changes
                  }}
                >
                  {filter}
                </div>
              ))}
            </div>
            <div className="bg-red-600 px-4 py-2 rounded-md text-white">
              Expires in: 10:56:21
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div
              className="bg-gray-300 p-2 rounded-full cursor-pointer"
              onClick={handleScrollLeft}
            >
              <Image src={arrow_left} alt="Scroll Left" />
            </div>
            <div
              className="bg-gray-300 p-2 rounded-full cursor-pointer"
              onClick={handleScrollRight}
            >
              <Image src={arrow_right} alt="Scroll Right" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 mt-10">
          <div className="grid grid-cols-4 gap-4 ">
            {visibleCategories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md border border-gray-400 p-4 relative"
              >
                {item.bestDeals ? (
                  <span className="absolute top-2 left-2 px-2 py-1 bg-green-300 text-white rounded items-center">
                    Best Deals
                  </span>
                ) : (
                  <span className="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-white rounded items-center">
                    Save {item.savePercentage}%
                  </span>
                )}
                {/* Center the image */}
                <div className="flex justify-center items-center h-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="responsive"
                    width={16} // Aspect ratio width
                    height={9} // Aspect ratio height
                  />
                </div>
                {/* Keep the rest of the content aligned to the start */}
                <div className="text-left space-y-1">
                  <p className="text-gray-400 text-sm">{item.category}</p>
                  <h2 className="text-base font-semibold text-gray-600">
                    {item.name}
                  </h2>
                  <p className="text-gray-400 text-sm flex justify-start items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        key={index}
                        src={
                          index < Math.round(item.rating) ? Star : Black_Star
                        }
                        alt="Star Rating"
                        width={16}
                        height={16}
                      />
                    ))}
                    <span className="ml-1">({item.rating})</span>
                  </p>
                  <p className="text-sm">
                    By <span className="text-green-500">{item.seller}</span>
                  </p>
                  <div className="flex gap-2">
                    <p className="text-green-500 font-semibold">
                      ${item.price}
                    </p>
                    <p className="text-gray-400 line-through">
                      ${item.originalPrice}
                    </p>
                  </div>
                  <div className="w-full h-2 flex bg-gray-200 rounded overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{
                        width: `${(item.remainingItems / item.totalItems) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="bg-gray-400 h-full"
                      style={{
                        width: `${100 - (item.remainingItems / item.totalItems) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-gray-800 text-sm flex items-center gap-2 pb-2">
                    Sold:
                    {item.remainingItems} / {item.totalItems}
                  </p>

                  <button className="bg-green-600 text-white flex justify-center items-center p-2 rounded-sm w-full gap-2 text-sm">
                    <Image
                      src={shopping_cart_white}
                      alt="Add to Cart"
                      width={16}
                      height={16}
                    />
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            {/* Background Image */}
            <Image
              src={Rectangle12}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background Image"
            />
            {/* Semi-transparent Background */}
            <div className="absolute inset-0 bg-pink-100 opacity-90"></div>
            {/* Content Section */}
            <div className="relative fle justify-center items-center text-left px-8 gap-1">
              <div className="my-4 justify-center text-center">
                <h1 className="text-3xl pt-4 font-bold ">10% off</h1>
                <p className="py-4 text-gray-700 flex flex-col">
                  <span>For new member sign up at</span>{' '}
                  <span> the first time</span>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="">Email address*</label>
                  <input
                    type="text"
                    placeholder="johndoe@gmail.com"
                    className="w-full p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Password*</label>
                  <input
                    type="text"
                    placeholder="Maximum 8 characters"
                    className="w-full p-2"
                  />
                </div>
                <button className="bg-green-600 text-white w-full py-2 my-5">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSells;
