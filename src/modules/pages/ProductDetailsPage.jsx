import React from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import ProductDetails from "../Layouts/ProductDetails.component";
import { CartContext } from "../../utils/Cart.context";
const ProductsDetailsPage = () => {
  return (
    <div>
      <CartContext>
        <Header />

        <div className="flex flex-col md:flex-row">
          <ProductDetails />
        </div>
      </CartContext>
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
