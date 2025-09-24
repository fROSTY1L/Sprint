import type { RouteObject } from "react-router-dom"

export type Route = RouteObject & {
    path: string;
    menuTitle: string;
    icon: React.ReactNode;
}