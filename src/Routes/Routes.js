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
import Booking from "../Pages/Services/Booking/Booking";
import UserBooking from "../Pages/Services/Booking/UserBooking/UserBooking";
import Review from "../Pages/Review/Review";
import ClientService from "../Pages/Services/ClientService/ClientService";
import ClientOtherServicesDetails from "../Pages/Services/ServiceDetails/ClientOtherServiceDetails";
import UserServiceBooking from "../Pages/Services/ServiceDetails/UserServiceBooking/UserServiceBooking";
import DashBoard from "../Pages/Dashboard/DashBoard";
import MyServices from "../Pages/Services/MyServices/MyServices";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
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
                loader: () => fetch(`https://photo-serve-server.vercel.app/services/`)
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><ServiceDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoutes><Booking /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/booking/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoutes><Review /></PrivateRoutes>,
                loader: () => fetch(`https://photo-serve-server.vercel.app/booking`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoutes><Review /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/booking/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/user-booking',
                element: <PrivateRoutes><UserBooking /></PrivateRoutes>
            },
            {
                path: '/user-services',
                element: <PrivateRoutes><ClientService /></PrivateRoutes>
            },
            {
                path: '/user-services/:id',
                element: <PrivateRoutes><ClientOtherServicesDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/user-services/${params.id}`)
            },
            {
                path: '/user-service-booking/:id',
                element: <PrivateRoutes><UserServiceBooking /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/user-services/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><DashBoard /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://photo-serve-server.vercel.app/services`)
            },
            {
                path: '/my-services',
                element: <PrivateRoutes><MyServices /></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;