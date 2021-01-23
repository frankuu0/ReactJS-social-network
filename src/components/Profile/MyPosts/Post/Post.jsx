import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://clck.ru/SvauX' />
        <p>{props.message}</p>
          <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;