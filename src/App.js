import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/DisplayPost/AddPost/AddPost';

function App() {

  const [entries, setEntries] = useState([{name:"Devin", post:"I like sandwiches", date:"04-21-2022"}])

  function addNewEntry(entry){
    let tempEntries =[...entries, entry];
 
    setEntries(tempEntries);
  }
  return(
    <div>
      <DisplayPost parentEntries={entries} />
      <AddPost addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;