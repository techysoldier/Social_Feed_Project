import React, { useState } from 'react';


function App() {

  const [entries,setEntries] = useState([{name:'Devin', post:'Id like a sandwhich'}])
 
  return (
    <div >
      <table> 
        <thead>
          <tr>
          <th> Name </th>
          <th> Post</th>
          </tr>
        </thead>
        <tbody>
        {entries.map((entry) => {
          return(
            <tr>
              <td>{entry.name}</td>
              <td>{entry.post}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
