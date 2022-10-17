import React from "react";
import s from './Post.module.css';
const personImg = require('../../../../assets/images/person.png');

const Post = (props) => {
  return ( /* message={posts[0].message} lokeCount= */
    <div className={s.item}>
      <h2>{props.message}</h2>
      <p>likes: {props.likesCount}</p>
      {/* <img src="https://picsum.photos/50/50" alt="" /> */}
      <img className="user-photo__small" src={personImg} alt="ss" />
    </div>
  )
}

export default Post;
