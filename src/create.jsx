const Create = () => {
    return (  
        <div className="create">
            <h1>Add A New Blog</h1>
            <form>
                <label>Blog Title:</label>
                <input type="text" required/>
                <label>Blog Body</label>
                <input type="textarea" required/>
                <label> Blog Author:</label>
                <select name="" id="">
                    <option value="">yosha</option>
                    <option></option>
                </select>
            </form>
        </div>
    );
}
 
export default Create;