import React from "react";
import { Carousel } from "@material-tailwind/react";
import data from "../../assets/data/data";
import SideHeading from "../../utils/SideHeading.Component";
const Categories = () => {
  const { carousalImages, categories, backGroundWhite } = data;

  return (
    <div className=" px-8  flex flex-col items-center m-2 pb-8 justify-center min-h-[360px] ">
      <div className="w-full mt-3 max-h[360px] max-w-screen mx-6  md:mt-6">
        <CarouselComponent images={carousalImages} />
      </div>
      <div
        className="w-full mt-5  max-w-5xl rounded-md py-3 px-12 bg-[#1d3557]  "
        style={{
          backgroundImage: `url(${backGroundWhite})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CategoryItems categories={categories} />
      </div>
    </div>
  );
};

const CategoryItems = ({ categories }) => {
  return (
    <div className="text-red-500  ">
      <SideHeading Heading={"Choose Your Style"} />
      <ul className="grid mt-6 grid-cols-1 sm:grid-cols-3 gap-4 text-sm ">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className="p-2 text-white bg-black cursor-pointer shadow-sm sm:p-3 md:p-4 sm:shadow-md sm:text-base  hover:bg-red-500 hover:text-white  rounded-sm"
            >
              {category}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

const CarouselComponent = ({ images }) => {
  return (
    <Carousel
      className="max-w-full rounded-xl shadow-md overflow-hidden max-h-[300px] sm:max-h-[400px] md:max-h-[300px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all text-red-500 bg-red-500 ${
                activeIndex === i
                  ? "w-8 bg-red-500"
                  : "w-4 text-red-500 bg-red-500"
              }`} /* Changed bg-white to bg-red-500 */
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))
      ) : (
        <></>
      )}
    </Carousel>
  );
};

export default Categories;
