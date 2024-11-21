import React from 'react';
import Image from 'next/image';
import image_1 from '../public/Top_Sells_img/image_1.png';
import image_2 from '../public/Top_Sells_img/image_2.png';
import image_3 from '../public/Top_Sells_img/image_3.png';
import image_4 from '../public/Top_Sells_img/image_4.png';
import image_5 from '../public/Top_Sells_img/image_5.png';
import image_6 from '../public/Top_Sells_img/image_6.png';
import image_7 from '../public/Top_Sells_img/image_7.png';
import Star from '../public/Top_Sells_img/Star.png';
import Black_Star from '../public/Top_Sells_img/Black_Star.png';

function Top_Sells() {
  return (
    <div className="flex justify-evenly items-center my-20">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Top Sells</h1>
        <div className="border-2 border-green-600 w-20 my-2 rounded-xl"></div>
        <div className="space-y-10 pt-8">
          <div className="flex justify-start items-center gap-2">
            <Image src={image_5} className="bg-gray-100" />
            <div className="space-y-2">
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_2} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_3} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Top Rated</h1>
        <div className="border-2 border-green-600 w-20 my-2 rounded-xl"></div>
        <div className="space-y-10 pt-8">
          <div className="flex justify-start items-center gap-2">
            <Image src={image_1} className="bg-gray-100" />
            <div className="space-y-2">
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_2} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_4} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Trending Items</h1>
        <div className="border-2 border-green-600 w-20 my-2 rounded-xl"></div>
        <div className="space-y-10 pt-8">
          <div className="flex justify-start items-center gap-2">
            <Image src={image_7} className="bg-gray-100" />
            <div className="space-y-2">
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_6} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_5} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Recently Added</h1>
        <div className="border-2 border-green-600 w-20 my-2 rounded-xl"></div>
        <div className="space-y-10 pt-8">
          <div className="flex justify-start items-center gap-2">
            <Image src={image_4} className="bg-gray-100" />
            <div className="space-y-2">
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_7} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={image_3} className="bg-gray-100" />
            <div>
              <h1 className="font-bold">Orange 1kg</h1>
              <div className="flex text-gray-400 items-center ">
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Star} />
                <Image src={Black_Star} />
                (4)
              </div>
              <div className="gap-2 flex">
                <p className="text-green-500 font-bold">$2</p>
                <p className="line-through text-gray-400">$3.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Sells;
