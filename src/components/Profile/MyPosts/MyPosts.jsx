import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let posts = [
  //   {id: 1, message: 'random post text', likes: '81'},
  //   {id: 2, message: 'random post text#2', likes: '73'},
  // ]

  let postsElements = props.posts.map( p =>  <Post message={p.message} likes={p.likes} id={p.id}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea cols="80" rows="3" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;