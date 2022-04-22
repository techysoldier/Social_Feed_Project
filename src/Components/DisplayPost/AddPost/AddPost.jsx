import React, {useState} from "react";

const AddPost = (props) => {

    const [name, setName]=useState('');
    const [date, setDate] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.precentDefault();
        let newPost = {
           post:post,
           date:date 
        };
        console.log(newPost);
        props.addNewPostProperty=(newPost);
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name' />
            <label>Post</label>
            <input type='post' />
            <label> Date </label>
            <input type ='date' value ={date} onChange={(event) => setDate(event.target.value)} />
            <button type = 'Post'>Post</button>
        </form>
    );
}

export default AddPost;