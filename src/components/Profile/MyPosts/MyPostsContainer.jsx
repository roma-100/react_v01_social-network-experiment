import React from "react";
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer-profile'
//import StoreContext from '../../../StoreContext'
import { connect } from 'react-redux'

// Возвращаем только те данные, которые нужны пользователям.
const mapStateToProps = (state) => {
  //console.log('hello!')
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
//debugger
export default MyPostsContainer;
