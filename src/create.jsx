import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState("")
const [body , setBody] = useState("")
const [author, setAuthor] = useState("")

const handleSubmit =(e)=>{
  e.preventDefault()
  
  
}

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
                 <button>Add Blog</button>
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