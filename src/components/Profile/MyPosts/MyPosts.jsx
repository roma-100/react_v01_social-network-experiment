import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators"

const MyPosts = (props) => {

  const addNewPost = (value) => {
    //console.log(value.newPost)
    props.addPost(value.newPost)
  }

//debugger
  //**** End event analyse ****

  return (
    <div className={s.item}>
      <h2>Hi MyPosts!</h2>
      <AddPostFormRedux onSubmit={addNewPost} />
      <hr />
      {props.posts.map((post, index) => (
        <Post message={post.message} likesCount={post.likesCount} key={index} />
      ))}
    </div>
  );
};

const MyPostForm = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field component="textarea" name="newPost"
            placeholder="it-kamasutra"
            validate = {[requiredField]}
      />
    </div>
    <div><button>Add post</button></div>
  </form>     
  )
}

const AddPostFormRedux = reduxForm({
  form: 'profileAddPostForm'
})(MyPostForm)

export default MyPosts;
