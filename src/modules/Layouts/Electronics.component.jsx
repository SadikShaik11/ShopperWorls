import React from "react";
import SideHeading from "../../utils/SideHeading.Component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ElectronicsData from "../../assets/data/Electronics.data";

const Electronics = () => {
  return (
    <div className="m-4">
      <div className="font-poppins font-bold text-red-600 flex">
        <SideHeading Heading="Computer Deals" />
      </div>
      <div className="">
        <ComputerAccessoriesCarousel />
      </div>
    </div>
  );
};

const ComputerAccessoriesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of items shown on each slide as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  let slider;
  const handleNext = () => {
    // Access Slider's slickNext method to move to the next slide
    slider && slider.slickNext();
  };

  const handlePrev = () => {
    // Access Slider's slickPrev method to move to the previous slide
    slider && slider.slickPrev();
  };

  return (
    <div className=" shadow-md  rounded-md m-3 sm:mt-0">
      <div className=" sm:mt-0 flex flex-col items-center ">
        <div className="flex justify-between w-[400px]">
          <span onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </span>

          <span onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
      <Slider {...settings} className=" m-0" ref={(c) => (slider = c)}>
        {ElectronicsData.computerAccessories.map((accessory) => (
          <div
            key={accessory.id}
            className=" font-poppins text-xs text-red-500 flex flex-col items-center"
          >
            <img
              className="h-40 w-56 object-contain flex flex-col items-center"
              src={accessory.imageUrl}
              alt={accessory.name}
            />
            <p>{accessory.name}</p>
          </div>
        ))}
      </Slider>
      <div className=" sm:mt-0 flex flex-col items-center ">
        <button
          className="inline-flex mt-8 items-center justify-center gap-2 px-6 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          style={{ "--Button2": "#DB4444" }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Electronics;
