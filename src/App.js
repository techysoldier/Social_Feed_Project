import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPost/DisplayPost";
import AddPost from "./Components/AddPost/AddPost";
import CreatePost from "./Components/createPost/CreatePost";
import './app.css';

function App() {
  const [posts, setPosts] = useState([
    { name: "Devin", post: "I need Food!!", date: "2/7/2022" },
    { name: "JJ", post: "Me too!!", date: "2/7/2022" },
    { name: "Ricky Bobby", post: "If you're not first you're last!!", date: "2/7/2022" },
  ]);

  function addNewPost(entry) {
    let tempEntries = [...posts, entry];
    setPosts(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin:'1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
        <div className='border-box'>
        <DisplayPosts newEntryProperty={posts}/>
      <CreatePost addNewEntryProperty={addNewPost} />
        </div>
        </div>
        <div className='col-md-6'>
        <div className='border-box'>
        <AddPost DisplayPosts={posts}/>
          </div>
          </div>
      </div>
    </div>
  );
}
export default App;