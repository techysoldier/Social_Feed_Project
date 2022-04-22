import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/DisplayPost/AddPost/AddPost';

function App() {

  const [entries, setEntries] = useState([{name:"Devin", post:"I like sandwiches", date:"04-21-2022"}])

  function NewPost(entry){
    let tempPost = [entries,...entry];
    setEntries(tempPost);
  }
  return(
    <div>
      <DisplayPost parentEntries={entries} />
      <AddPost addNewPostProperty={NewPost}/>
    </div>
  );
}

export default App;