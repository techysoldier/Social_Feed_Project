import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';


function App() {

  const [entries, setEntries] = useState([{name:"Devin", post:"I like sandwiches", date:"04-21-2022"}])

  return(
    <div>
      <DisplayPost parentEntries={entries} />
    </div>
  );
}

export default App;