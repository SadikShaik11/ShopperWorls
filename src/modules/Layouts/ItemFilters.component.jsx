import React from "react";
import { filters } from "../../assets/data/Filters";
import SideHeading from "../../utils/SideHeading.Component";
const ItemFilter = () => {
  function toggleFilters(id) {
    const filtersDiv = document.getElementById(id);
    if (filtersDiv?.style?.display === "none") {
      filtersDiv.style.display = "flex";
      filtersDiv.style.flexWrap = "wrap";
      filtersDiv.style.gap = "0.5rem";
    } else {
      if (filtersDiv) {
        filtersDiv.style.display = "none";
      }
    }
  }
  function filterExpand(id) {
    const filtersDiv = document.getElementById(id);
    if (filtersDiv?.style?.display === "none") {
      filtersDiv.style.display = "block";
    } else {
      filtersDiv.style.display = "none";
    }
  }

  return (
    <div className=" sm:h-auto md:h-auto pl-3 pr-[20%] sm:pr-[10%] sm:pb-0 md:pb-0 font-poppins text-sm flex flex-col lg:w-1/5">
      <span
        onClick={() => {
          filterExpand("expand");
        }}
        className="text-lg font-semibold cursor-pointer mb-4"
      >
        <SideHeading Heading={"Filter"} />
      </span>
      <div className="pl-4">
        <div id="expand">
          <div className="mb-6">
            <h2
              onClick={() => toggleFilters("price")}
              className="text-gray-800 text-base font-medium mb-2 cursor-pointer"
            >
              Price
            </h2>
            <div id="price" className="flex flex-wrap gap-2 ">
              {" "}
              {filters?.priceRange?.map((price) => {
                return (
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{price.name}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h2
              onClick={() => toggleFilters("size")}
              className="text-gray-800 text-base font-medium mb-2 cursor-pointer"
            >
              Size
            </h2>
            <div id="size" className="flex flex-wrap gap-2 ">
              {" "}
              {filters?.size?.map((size) => {
                return (
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{size.name}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="mb-6">
            <h2
              onClick={() => toggleFilters("color")}
              className="text-gray-800 text-base font-medium mb-2 cursor-pointer"
            >
              Color
            </h2>
            <div id="color" className="flex flex-wrap gap-2 ">
              {filters?.color?.map((color) => {
                return (
                  <label className="inline-flex items-center" key={color.name}>
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{color.name}</span>
                    <span
                      className="h-3 w-3 ml-2 border border-gray-300 rounded-full"
                      style={{ backgroundColor: color.value }}
                    ></span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <h2
              onClick={() => toggleFilters("variant")}
              className="text-gray-800 text-base font-medium mb-2 cursor-pointer"
            >
              Variants
            </h2>
            <div id="variant" className="flex flex-wrap gap-2 ">
              {filters?.variants?.map((variant) => {
                return (
                  <label
                    className="inline-flex items-center"
                    key={variant.name}
                  >
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{variant.name}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-6">
            <h2
              onClick={() => toggleFilters("gender")}
              className="text-gray-800 text-base font-medium mb-2 cursor-pointer"
            >
              Gender
            </h2>
            <div id="gender" className="flex flex-wrap gap-2 ">
              {" "}
              {filters?.gender?.map((gender) => {
                return (
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{gender.name}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFilter;
