import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        console.debug('useEffect', blogs)
        setIsLoading(true)
        fetch('http://localhost:8000/blogs')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data)
                setIsError(false)
            })
            .catch(err => {
                console.debug('Error:', err)
                setIsError(true)
            })
            .finally(()=> setIsLoading(false))
    },[])

    const handleDelete = (id) => {
        const filteredBlogs = blogs.filter((i) => i.id !== id)
        setBlogs(filteredBlogs)
    }

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {isError && <div>ERROR</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;