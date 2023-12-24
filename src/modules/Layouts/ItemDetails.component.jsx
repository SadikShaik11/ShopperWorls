import React from "react";

const ItemDetails = ({ productDetails }) => {
  return (
    <div className="">
      <div className="mx-auto text-sm mt-11 w-[270px] h-[250px] transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <img
          className="h-[150px] w-full object-cover object-center"
          src={productDetails.imageUrl}
          alt="Product Image"
        />
        <div className="p-2">
          <h2 className="mb-1 text-sm font-medium dark:text-white text-gray-900">
            {productDetails.name}
          </h2>
          <p className=" text-xsm h-[2.5rem] align-middle dark:text-gray-300 text-gray-700">
            {productDetails.description}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-sm font-semibold text-gray-900 dark:text-white">
              ${productDetails.price}
            </p>
            <p className="text-base font-sm text-gray-500 line-through dark:text-gray-300">
              ${productDetails.price + 100}
            </p>
            <p className="ml-auto text-md font-medium text-green-500">
              {Math.round(
                ((productDetails.price - productDetails.price + 100) /
                  productDetails.price) *
                  100
              )}
              % off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
