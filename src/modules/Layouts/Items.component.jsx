import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemDetails from "./ItemDetails.component";
import Timer from "../../utils/TimerCompnent";
import data from "../../assets/data/data";
const Items = () => {
  const { fashionItems } = data;
  const productCards = [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  fashionItems.map((item, index) => {
    const productCardContent = (
      <ItemDetails productDetails={item} key={index} />
    );
    productCards.push(productCardContent);
  });

  const handleNext = () => {
    // Access Slider's slickNext method to move to the next slide
    slider && slider.slickNext();
  };

  const handlePrev = () => {
    // Access Slider's slickPrev method to move to the previous slide
    slider && slider.slickPrev();
  };

  let slider;

  return (
    <div className=" shadow-md rounded-md m-5 sm:mt-0">
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

          <span className="font-poppins  font-bold flex text-md text-rose-400">
            Top Deals Ends in {<Timer />}
          </span>
          <span onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
      {/* carousal */}
      <Slider {...settings} className="" ref={(c) => (slider = c)}>
        {productCards}
      </Slider>
      <div className=" sm:mt-0 flex flex-col items-center pb-4">
        <button
          className="inline-flex mt-8 items-center justify-center gap-2 px-6 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          style={{ "--Button2": "#DB4444" }}
          onClick={() => {
            window.location.href = "/products";
          }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Items;
