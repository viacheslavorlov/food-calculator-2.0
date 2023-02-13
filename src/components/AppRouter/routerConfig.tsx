import {RouteProps} from "react-router-dom";
import {AddNewItems, DeleteItems, MainPage, Packages, PageNotFound} from "../pages";

export const routerConfig: RouteProps[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/package',
        element: <Packages/>
    },
    {
        path: '/new-item',
        element: <AddNewItems/>
    },
    {
        path: '/delete-item',
        element: <DeleteItems/>
    },
    {
        path: '*',
        element: <PageNotFound/>
    },
]
