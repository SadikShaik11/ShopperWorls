import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/modules/pages/LandingPage";
import HeaderComponent from "./src/modules/Header/Header.component";
import Products from "./src/modules/pages/Products";
import AppPage from "./src/modules/pages/AppPage";

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

        ]
    }


])

module.exports = routes