import React from "react";
import data from "../../assets/data/data";
import SideHeading from "../../utils/SideHeading.Component";

const NewArrivals = () => {
  const { WOMANS_COLLECTION, SPEAKERS, PERFUME, PS5 } = data.newArrivals;

  return (
    <div className="h-[450px] mb:30 pb-30">
      <div className="w-screen h-[250px] text-sm  ">
        <span className="text-red-500">
          <SideHeading Heading={"New Arrivals"} />
        </span>
        <div className="flex font-poppins max-w-screen m-5 max-h-[250px]">
          <div className="w-[50%] items-center flex h-full bg-black">
            <img
              src={PS5}
              className="h-full w-[50%] object-cover animate-pulse "
              alt="PS5"
            />
            <span className="text-md text-white ">
              Unleash your gaming potential with the PS5
              <a href="" className="text-red-500">
                {" "}
                Shop Now
              </a>
            </span>
          </div>

          <div className="h-full w-[50%] bg-white flex-row mx-4  ">
            <div className="h-1/2 flex justify-around  bg-black">
              <div className="w-1/2 flex items-center my-1 border-3  border-white">
                <img
                  src={PERFUME}
                  className="h-[125px] w-[50%] object-cover"
                  alt="Perfume"
                  srcset=""
                />
                <span className="font-poppins text-white ">
                  <span> GUCCI INTENSE OUD EDP </span>{" "}
                  <span className="text-red-500">Shop Now </span>
                </span>
              </div>
              <div className="w-1/2 bg-black flex items-center border-3 my-1  border-white">
                <img
                  src={SPEAKERS}
                  className="h-[125px] w-1/2"
                  alt="Speakers"
                  srcset=""
                />
                <span className="text-white text-md  ">
                  {"Discover the essence "}
                </span>
              </div>
            </div>
            <div className="h-1/2 flex items-center bg-black mt-2 sm:m-0">
              <img
                className="h-[125px] "
                src={WOMANS_COLLECTION}
                alt="WOMEN_COLLECTION"
              />
              <span className="text-white  text-md">
                {"Featured woman collections that give you another vibe."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
