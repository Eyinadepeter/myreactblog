import useFetch from "./useFetch";

const BlogDetails = () => {
  const { data, error, isPending } = useFetch('http://localhost:8000/blogs');
  console.log(data)

  return (
        <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error}</div> }
      {data.foreach(data =>(
        <div key={data.id}>Blog Details ----{data.title}</div>
        )
        )}
    </div>
  );
}
 
export default BlogDetails;