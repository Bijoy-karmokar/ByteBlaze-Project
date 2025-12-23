import toast from "react-hot-toast";

export const getBlog =()=>{
    const saveBlogs = localStorage.getItem("blogs");
    if(saveBlogs) return JSON.parse(saveBlogs);
    return [];
}

export const addBlog = blog=>{
    // console.log(blog);
    const blogs = getBlog();
    console.log(blogs);
    const isExist = blogs.find(blg=>blg.id === blog.id);
    if(isExist) return toast.error("Already Blogs Added");
    blogs.push(blog);
    toast.success("Blogs added successfully.");
    localStorage.setItem("blogs",JSON.stringify(blogs))

}

export const deleteBlog = id=>{
    const blogs = getBlog();
    const remainingBlog = blogs.filter(blg=> blg.id !== id);
    toast.error("Blogs deleted successfully");
    localStorage.setItem("blogs",JSON.stringify(remainingBlog));
}