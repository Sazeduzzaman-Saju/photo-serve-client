import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/home',
                element: <Home />
            },
            { path: '/about', element: <About /> },
            { path: '/login', element: <Login /> }
        ]
    }
]);

export default router;