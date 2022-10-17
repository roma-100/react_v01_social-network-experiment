import React from "react";
import './Profileinfo.css'
import '../../../assets/css/socialmedia.css'
import MyPostsContainer from '../MyPosts/MyPostsContainer'
import Preloader from '../../commonBlocks/Preloader/PreloaderWaive'
import personImg from "../../../assets/images/anonyme.png";
import ProfileStatus from './ProfileStatus'

const Profileinfo = (props) => {
  //window.bb = props.profile.userId
  //!props.profile && <Preloader /> //Empty data test 

  const smallPhoto = () => (
    props.profile.photos.small ? props.profile.photos.small : personImg
  )

/*   const userContacts = () => {
    const arrContacts = Object.entries(props.profile.contacts);
    window.c1 = arrContacts
    window.cc = arrContacts.map((a,b)=>(`${a}  ${b}`))
    //return  arrContacts.map((sosialSource,key)=>(<p> sosialSource: {sosialSource}  </p>))
    return  arrContacts.map((arrC,key)=>(
      arrC.map((media,key) => ((<p> media: {media} key: {key} </p>)))
      ))
  } */

  const isPropsTxt = () => (
    <div>
      
      <div className="user-info">
          <ProfileStatus status={props.status} 
                         updateStatus = {props.updateStatus} 
          />
          <div className="user-info__hero">
            <div className="user-info__id">id: #{props.profile.userId}</div>
            <img className="user-info__photo-small" src={smallPhoto()} alt="small Photo" />
          </div>

          <div className="user-info">Full name:</div>
          <div className="user-info-holder">
            {props.profile.fullName ? props.profile.fullName : 'No name'}
          </div>

          <div className="user-info">About me:</div>
          <div className="user-info-holder">
            {props.profile.aboutMe ? props.profile.aboutMe : '...'}
          </div>

          <SocialMediaContacts contacts={props.profile.contacts} />       

      </div>
      {/* <MyPostsContainer /> */}
    </div>
  )

  return (
    !props.profile ? <Preloader /> : isPropsTxt()
  )
}

const SocialMediaContacts = (props) => {
  const contacts = [];

  props.contacts.facebook && (contacts.push(["fa fa-facebook", props.contacts.facebook]))
  props.contacts.website && (contacts.push(["fa fa-external-link", props.contacts.website]))
  props.contacts.vk && (contacts.push(["fa fa-vimeo", props.contacts.vk]))
  props.contacts.twitter && (contacts.push(["fa fa-twitter", props.contacts.twitter]))
  props.contacts.instagram && (contacts.push(["fa fa-instagram", props.contacts.instagram]))
  props.contacts.youtube && (contacts.push(["fa fa-youtube", props.contacts.youtube]))
  props.contacts.github && (contacts.push(["fa fa-github", props.contacts.github]))


const printContacts = () => {
    if (!contacts.length) return ('User has not contacts info yet...')

    return (  contacts.map((contact, index) =>(
      <a href={contact[1]} className={contact[0]} key={index}></a>
  
    )))
  }

  return (
    <>
    <div className="user-info user-contacts">Contacts:</div>
    <div className="user-info-holder">
      {  printContacts()}
    </div>
    {}
    </>
  );
}

export default Profileinfo;