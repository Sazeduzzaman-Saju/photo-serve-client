import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRooutes/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <PrivateRoutes><About /></PrivateRoutes>
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                // loader: ({ params }) => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;