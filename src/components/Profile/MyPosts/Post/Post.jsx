import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
        <p>{ props.message }</p>
          <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;