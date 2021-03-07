import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  // let posts = [
  //   {id: 1, message: 'random post text', likes: '81'},
  //   {id: 2, message: 'random post text#2', likes: '73'},
  // ]

  // let postsElements = props.posts.map( p =>  <Post message={p.message} likes={p.likes} id={p.id}/>)
  // let newPostElement = React.createRef();
  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
    // let refresh  = document.getElementById('typePostText');
    // refresh.value="";

  };
  let onPostChange = (text) => {
    //let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <MyPosts updateNewPostText={ onPostChange } addPost={ addPost } posts={ props.posts }/>
  )

}

export default MyPostsContainer;