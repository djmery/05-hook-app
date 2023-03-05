import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routesConfig from "./Router";

export const MainApp = () => {

    const router = createBrowserRouter(routesConfig);

    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}