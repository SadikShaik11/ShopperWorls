import React from "react";
import ItemFilter from "../Layouts/ItemFilters.component";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import ProductsListing from "../Layouts/ProductsListing.component";
const Products = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <ItemFilter className="order-2 md:order-1 mb-4 md:mb-0 md:mr-4 " />
        <ProductsListing className="order-1 md:order-2" />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
