import {routesHomeType} from "./types";
import UndefinedView from "../components/views/UndefinedView";
import Film from "../components/views/Film";
import Home from "../components/views/Home";

const routesHome: routesHomeType[] = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/404",
        exact: true,
        data: { requiresLogin: false },
        component: UndefinedView,
    },
    {
        path: "/film/:id",
        exact: true,
        data: { requiresLogin: false },
        component: Film,
    },
]
export { routesHome }