import useFetch from "./useFetch";

const BlogDetails = () => {
  const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs');

  return (
        <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error}</div> }
      {blog && <BlogDetails blog = {blog.title}/>}
        )
        
    </div>
  );
}
 
export default BlogDetails;