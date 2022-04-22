
const DisplayPost = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
 
export default DisplayPost;
