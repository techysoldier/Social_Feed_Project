const DisplayPost = (props) => {
  return (
    <div>
      {props.setentires((post, index) => {
        return (
          <ul key={index} className="border-box">
            <div>
              <li>{post.date}</li>
              <li>
                <h3>{post.name}</h3>
              </li>
              <li>{post.comment}</li>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
export default DisplayPost;