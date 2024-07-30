import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root"
import Home from "../App";
import LayoutTwo from "../layout/layoutTwo";
import Contact from "../pages/contact";
import NotFound from "../pages/404";
import ServiceDetails from "../pages/service-details.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children:[
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])