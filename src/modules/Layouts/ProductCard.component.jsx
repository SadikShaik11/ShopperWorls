import React from "react";

const ProductCard = ({ productDetails }) => {
  return (
    <div>
      {/* <div className="mx-auto font-poppins text-sm mt-11 w-[270px] h-[400px] transform overflow-hidden bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-[250px] object-contain"
            src={productDetails.image}
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-red-500 text-md mb-2 overflow-hidden h-5">
            {productDetails.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 overflow-hidden h-10 line-clamp-3">
            {productDetails.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">{productDetails.price}</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div> */}
      <div className="mx-auto font-poppins text-sm mt-6 w-[200px] h-[350px] transform overflow-hidden bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-[180px] object-cover"
            src={productDetails.image}
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-lg font-bold text-red-500 text-md mb-1 overflow-hidden h-6">
            {productDetails.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 overflow-hidden h-16 line-clamp-3">
            {productDetails.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-md">{productDetails.price}</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
