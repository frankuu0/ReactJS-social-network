import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsData = [
    {id: 1, message: 'random post text', likes: '81'},
    {id: 2, message: 'random post text#2', likes: '73'},
  ]

  return (
    <div>
      My posts
      <div>
        <input type="text"/>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likes} id={postsData[0].id}/>
        <Post message={postsData[1].message} likes={postsData[1].likes} id={postsData[1].id}/>
      </div>
    </div>
  )

}

export default MyPosts;