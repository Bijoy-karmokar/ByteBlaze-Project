import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import BookMarks from "../Pages/BookMarks";
import BlogDetails from "../Pages/BlogDetails";
import Content from "../components/Content";
import Author from "../components/Author";

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
              Component:Blogs,
              loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
              path:"/blog/:id",
              Component:BlogDetails,
              loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
              children:[
                {
                    index:true,
                    Component:Content,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
                },
                {
                    path:"author",
                    Component:Author,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                }
              ]
            },
            {
                path:"/bookmarks",
                Component:BookMarks
            }
        ]
    }
])
export default router;