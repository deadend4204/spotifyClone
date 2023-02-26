import Home from "../pages/home";
import Login from "../pages/login";
import Playlist from "../pages/playlist";
import Search from "../pages/search";


export const availableRoutes = [
    {
        component: Login,
        path: "/login",
        isPrivate: false,
        isDashboard: false,
    },
    {
        component: Home,
        path: "/",
        isPrivate: true,
        isDashboard: true,
    },
    {
        component: Playlist,
        path: "/playlist/:id",
        isPrivate: true,
        isDashboard: true,
    },
    {
        component: Search,
        path: "/search",
        isPrivate: true,
        isDashboard: true,
    }
];