import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
const [title, setTitle] = useState("")
const [body , setBody] = useState("")
const [author, setAuthor] = useState("")
const [ispending,setPending] = useState(false)
const History = useHistory()

const handleSubmit =(e)=>{
  e.preventDefault()

  const blog={title,body,author};
  setPending(true)

setTimeout(() =>{
    fetch ("http://localhost:8000/blogs",{
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(blog)
}).then(() => {
    console.log("new blog Added")
    setPending(false)
    History.push(/);
})},1000)}

    return (
        <div className="create">
            <h1>Add A New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} 
                onChange={(e) =>setTitle(e.target.value)}/>
               
                <label>Blog Body</label>
                <input type="textarea" required
                value={body} 
                onChange={(e) =>setBody(e.target.value)}/>
                <label> Blog Author:</label>
                <select value={author}
                onChange={(e) =>setAuthor(e.target.value) }>
                    <option>Mario</option>
                    <option>Yoshau</option>
                    
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding blog ....</button>}
                 <div>
                    <p>{title}</p>
                   <p>{author}</p>
                    <p>{body}</p>
                 </div>
            </form>
        </div>
    );
}

export default Create;