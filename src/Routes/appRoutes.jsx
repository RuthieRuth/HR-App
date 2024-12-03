import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";

import Login from "../Pages/Login";
import List from "../Pages/List";
import Form from "../Pages/Form";
import PersonalEmployeePage from "../Pages/PersonalEmployeePage";


export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            errorElement: <ErrorPage/>,
            children: [
                        {path:'/', element: <Login/>},
                        {path:'/list', element: <List/>},
                        {path:'/list/:id', element: <PersonalEmployeePage/>},
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




/*     [
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                { path: '/', element: <Login /> },
                {path: '/list', 
                 element: <List />,
                 children: [{ path: ':id', element: <PersonalEmployeePage /> }]
                },
                { path: '/form', element: <Form /> }
            ],
        }
    ],  */