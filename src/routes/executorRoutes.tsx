import type { Route } from "./types";
import { HomeOutlined } from "@ant-design/icons"

export const executorRoutes: Route[] = [
    {
        path: "/",
        menuTitle: "Home",
        icon: <HomeOutlined />
        /*
        TODO: Добавить дочерние элементы после их написания
        children: [
            { index: true, element: <Home /> }
        ]
        */
    }
]