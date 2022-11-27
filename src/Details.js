import { useParams } from "react-router-dom";
import useFetch from "./usefetch"

const Details = () => {
    const { id }  = useParams()
    const {data: blog, isLoading, isError} = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { isError && <div>ERROR</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}

        </div>
    );
}
 
export default Details;