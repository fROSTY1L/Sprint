import type { RouteObject } from "react-router";
import { customerRoutes } from "./customerRoutes";
import { executorRoutes } from "./executorRoutes";


export const routes: RouteObject[] = [
    {
        path: "/",
        /*
        TODO: Добавить общую разметку страницы
        element: <MainLayout></MainLayout> 
        */
        children: [
            /*
            TODO: Сделать разделение роутинга в зависимости от
            типа пользователя
            */
            ...customerRoutes,
            ...executorRoutes,
        ]
    }
]