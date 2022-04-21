import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/displayPost';

function App() {

  const [entries,setEntries] = useState([{name:'Devin', post:'Id like a sandwhich'}])
 
  return (
    <div >
      <DisplayPost parentEntries={entries} />
    </div>
  );
}

export default App;
