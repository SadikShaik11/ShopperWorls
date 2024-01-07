import React from "react";
import { useState, useEffect } from "react";
import ProductListingApi from "../api/ProductListing";
import ProductCard from "./ProductCard.component";
import { Link } from "react-router-dom";

const ProductListing = () => {
  let [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await ProductListingApi.getAllProducts();
        setAllProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className=" flex flex-wrap gap-3 ">
      {allProducts && allProducts.length > 0 ? (
        allProducts.map((productDetails, index) => (
          <Link
            to={"/product-details/" + productDetails.id}
            className="no-style-link"
          >
            <div className="" key={index}>
              <ProductCard
                key={productDetails.id}
                title={productDetails.title}
                price={productDetails.price}
                productDetails={productDetails}
              />
            </div>
          </Link>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductListing;
