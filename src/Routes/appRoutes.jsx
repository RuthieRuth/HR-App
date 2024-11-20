import { createBrowserRouter, Form } from "react-router-dom";
import Root from "../Pages/root";
import ErrorPage from "../Pages/ErrorPage";

import Login from "../Pages/Login";
import List from "../Pages/List";




export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            errorElement: <ErrorPage/>,
            children: [
                        {path:'/', element: <Login/>},
                        {path:'/list', element: <List/>},
                        {path:'/form', element: <Form/>}
                      ],
        },
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    });