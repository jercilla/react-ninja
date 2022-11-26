import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() =>{
        console.debug('useEffect', blogs)
        fetch('http://localhost:8000/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    },[])

    const handleDelete = (id) => {
        const filteredBlogs = blogs.filter((i) => i.id !== id)
        setBlogs(filteredBlogs)
    }

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;