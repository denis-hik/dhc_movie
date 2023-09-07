import {routesHomeType} from "./types";
import {lazy} from "react";
const routesHome: routesHomeType[] = [
    {
        path: "/",
        exact: true,
        component: lazy(() => import("../components/views/Home")),
    },
    {
        path: "/404",
        exact: true,
        data: { requiresLogin: false },
        component: lazy(() => import("../components/views/UndefinedView"))
    },
    {
        path: "/film/:id",
        exact: true,
        data: { requiresLogin: false },
        component: lazy(() => import("../components/views/Film"))
    },
]
export { routesHome }