import React from "react";

import Categories from "../Layouts/Categories.component";
import Items from "../Layouts/Items.component";
import Electronics from "../Layouts/Electronics.component";
import NewArrivals from "../Layouts/NewArrivals.component";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import { CartContext } from "../../utils/Cart.context";
const LandingPage = () => {
  return (
    <div className="app">
      <div className="content">
        <CartContext>
          <Header />
        </CartContext>
        {/* body */}
        <div>
          {/* Layout1 */}
          <div>
            <Categories />
            <Items />
            <Electronics />
            <NewArrivals />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
