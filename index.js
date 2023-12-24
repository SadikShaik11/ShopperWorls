import React from "react"
import ReactDOM from "react-dom/client"
import routes from './App.routes'
import { RouterProvider } from "react-router-dom";
// landing page
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routes} />)