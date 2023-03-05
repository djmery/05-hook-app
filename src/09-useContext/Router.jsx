import { Navigate, Outlet } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

const routesConfig = [
    {
        path: "/",
        element: (
            <>
                <UserProvider>
                    <Navbar />
                    <Outlet />
                </UserProvider>
            </>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
];

export default routesConfig;