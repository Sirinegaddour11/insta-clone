import React from "react";
import Post from "./Post";

const DATA = [
    {
        id:1 ,
        username: 'syrine gaddour',
        userImg :'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png',
        img : 'https://www.numereeks.com/wp-content/uploads/2021/05/pexels-pixabay-268533-1024x682.jpg',
        caption : 'HELLO!',
    },
    {
        id:2 ,
        username: 'syrine gaddour',
        userImg :'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png',
        img : 'https://www.numereeks.com/wp-content/uploads/2021/05/pexels-pixabay-268533-1024x682.jpg',
        caption : 'HELLO!',
    },
    {
        id:3 ,
        username: 'syrine gaddour',
        userImg :'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png',
        img : 'https://www.numereeks.com/wp-content/uploads/2021/05/pexels-pixabay-268533-1024x682.jpg',
        caption : 'HELLO!',
    },
]
function Posts() {
  return (
    <div>
      {DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
