import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    {id: 1, message: 'random post text', likes: '81'},
    {id: 2, message: 'random post text#2', likes: '73'},
  ]

  let postsElements = posts.map( p =>  <Post message={p.message} likes={p.likes} id={p.id}/>)

  return (
    <div>
      My posts
      <div>
        <input type="text"/>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;