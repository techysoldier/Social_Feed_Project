import React from "react";
import DisplayPosts from "../DisplayPost/DisplayPost";


const Post = (props) => {
    let singlePost = props.post.map((post) => {
      return (
        <div>
          <DisplayPosts name={post.name} post={post.post} date={post.date} />
        </div>
      );
    });
    return <div>{singlePost}</div>;
  };
 
export default Post;