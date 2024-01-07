import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/modules/pages/LandingPage";
import Products from "./src/modules/pages/Products";
import AppPage from "./src/modules/pages/AppPage";
import ProductsDetailsPage from "./src/modules/pages/ProductDetailsPage";
// const ClassComponent = lazy(() => import("./Components/ClassComponent"))
const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <> oops something went wrong ...!</>,
        children: [
            {
                path: '',
                element: < LandingPage />
            },

            {
                path: 'products',
                errorElement: <> oops something went wrong ...!</>,
                element: <Products />
            },
            {
                path: 'product-details/:id',
                errorElement: <> oops something went bad ...!</>,
                element: < ProductsDetailsPage />
            },

        ]
    }


])

module.exports = routes