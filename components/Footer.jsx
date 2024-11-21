import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Footer_img/Logo.png';
import f from '../public/Footer_img/f.png';
import r from '../public/Footer_img/r.png';
import $ from '../public/Footer_img/$.png';
import Payment from '../public/Footer_img/Payment.png';
import facebook from '../public/Footer_img/facebook.png';
import instagram from '../public/Footer_img/instagram.png';
import Linkedin from '../public/Footer_img/Linkedin.png';
import twitter from '../public/Footer_img/twitter.png';
import phone from '../public/Footer_img/phone.png';
import mail from '../public/Footer_img/mail.png';
import map from '../public/Footer_img/map.png';
import clock from '../public/Footer_img/clock.png';

function Footer() {
  return (
    <div className="container mx-auto p-4 px-16">
      <div className="flex justify-between items-center space-x-32 pb-10 pt-20">
        <div className="flex justify-center items-center gap-4">
          <Image src={$} />
          <div>
            <h1 className="font-semibold">Best Prices & Deals</h1>
            <p className="text-gray-400 text-sm">
              Don't miss our daily amazing deals and prices
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image src={r} />
          <div>
            <h1 className="font-semibold">Refundable</h1>
            <p className="text-gray-400 text-sm">
              If your items have damage we agree to refund it
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image src={f} />
          <div>
            <h1 className="font-semibold">Free delivery</h1>
            <p className="text-gray-400 text-sm">
              Do purchase over $50 and get free delivery anywhere
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 my-4" />
      <div className="flex flex-col md:flex-row justify-between items-start pt-8">
        <div className="space-y-4">
          <div className="flex">
            <Image src={Logo} alt="" className="mr-2" />
            <div>
              <h1 className="text-2xl font-bold text-green-600">Groceyish</h1>
              <p className="text-gray-400 text-sm">GROCERY</p>
            </div>
          </div>
          <Link
            href="#"
            className="text-gray-700 hover:text-green-500 flex justify-start items-center gap-1"
          >
            <Image src={map} alt="" />
            <p>
              <span className="text-black">Address</span>: 1762 School House
              Road
            </p>
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-green-500 flex justify-start items-center gap-1"
          >
            <Image src={phone} alt="" />
            <p>
              <span className="text-black">Call Us</span>: 1233-777
            </p>
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-green-500 flex justify-start items-center gap-1"
          >
            <Image src={mail} alt="" />
            <p>
              <span className="text-black">Email</span>: groceyish@contact.com
            </p>
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-green-500 flex justify-center items-center gap-1"
          >
            <Image src={clock} alt="" />
            <p>
              <span className="text-black">Work hours</span>: 8:00 - 20:00,
              Sunday - Thursday
            </p>
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Account</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Cart
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Shipping Details
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Useful links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Hot Deals
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Promotions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                New products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Help Center</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Payments
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Refund
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Q&A
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-green-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 mb-8 mt-12" />
      <footer className="mt-8 flex justify-between items-center pb-4">
        <p className="text-gray-500">&copy; 2022, All rights reserved</p>
        <Image src={Payment} alt="first" />
        <div className="flex justify-center items-center space-x-5">
          <div className="bg-green-600 p-2 rounded-full">
            <Link href="#" className="text-gray-700 hover:text-green-500">
              <Image src={facebook} alt="" />
            </Link>
          </div>
          <div className="bg-green-600 p-2 rounded-full">
            <Link href="#" className="text-gray-700 hover:text-green-500">
              <Image src={Linkedin} alt="" />
            </Link>
          </div>
          <div className="bg-green-600 p-2 rounded-full">
            <Link href="#" className="text-gray-700 hover:text-green-500">
              <Image src={instagram} alt="" />
            </Link>
          </div>
          <div className="bg-green-600 p-2 rounded-full">
            <Link href="#" className="text-gray-700 hover:text-green-500">
              <Image src={twitter} alt="" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
