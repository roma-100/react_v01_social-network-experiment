import * as axios from "axios";
import React from "react";
import personImg from "../../assets/images/person.png"

const Users = (props) => {

const initDataOld = () => {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://randomuser.me/api/portraits/med/men/5.jpg',
            followed: false,
            fullname: "Dmitry",
            status: "hello it's my status",
            location: { city: "Minsk", country: "Belarus" },
          },
          {
            id: 2,
            photoUrl: 'https://randomuser.me/api/portraits/med/men/2.jpg',
            followed: true,
            fullname: "Roman",
            status: "Roman everywhere",
            location: { city: "Omsk", country: "Russia" },
          },
          {
            id: 3,
            photoUrl: 'https://randomuser.me/api/portraits/med/men/3.jpg',
            followed: false,
            fullname: "Ilon Musk",
            status: "Follow me to the Mars",
            location: { city: "NY", country: "USA" },
          }
      ]);
}

const initData = () => {
  axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      const extractData = response.data.items
      //debugger
      props.setUsers(extractData)    
    })
  props.setUsers([]);
}
  const dataExtractor = () => {
    return props.users.map((u) => {
      return (
        <div>
          key={u.id} {u.name}
          <span>
            <div className="user-photo">
              <img src={u.photos.small ? u.photos.small : personImg} alt="ss" />
            </div>
            <div className="">
              {!u.followed ? (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              ) : (
                <button onClick={() => props.unfollow(u.id)}>unFollow</button>
              )}
              {/* <button onClick={cruser}>createUser</button> */}
            </div>
          </span>
          <span>
            <span>
              <div className="">{u.fullname} </div>
              <div className="">{u.status} </div>
            </span>
            <span>
              <div className="">{"u.location.country"} </div>
              <div className="">{"u.location.city"} </div>
            </span>
          </span>
        </div>
      );
    });
  };
  //debugger
  const initBbutton = () => {
    if (props.users.length === 0) {
        return <button onClick={initData}>initData</button>
    }
    return ( null)
    }
  return ( 
      <div className="">
          <div className="">{initBbutton()}</div>
          <div className="">{dataExtractor()}</div>
      </div>
   )
};

export default Users;
