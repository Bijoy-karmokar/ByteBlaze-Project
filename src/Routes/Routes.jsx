import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import BookMarks from "../Pages/BookMarks";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
              path:"/blogs",
              Component:Blogs
            },
            {
                path:"/bookmarks",
                Component:BookMarks
            }
        ]
    }
])
export default router;