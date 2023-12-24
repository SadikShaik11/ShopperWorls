import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/modules/pages/LandingPage";
import HeaderComponent from "./src/modules/Header/Header.component";

// const ClassComponent = lazy(() => import("./Components/ClassComponent"))
const routes = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <> oops something went wrong ...!</>,
        children: [
            // {
            //     path: '/',
            //     element: <HeaderComponent />
            // },

        ]
    }


])

module.exports = routes