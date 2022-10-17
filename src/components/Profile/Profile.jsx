import React from "react";
import './Profile.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
 
  //console.log(!props.profile ? 'Noo' : 'Yes')
  return (
    <div>
      <div className="content__hero"></div>

      <Profileinfo profile={props.profile} 
                   status = {props.status}
                   updateStatus = {props.updateStatus} 
                    />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
