import React from "react";
import personImg from "../../assets/images/anonyme.png";
import './Users.css';
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import {userAPI} from '../../api/api'

const Users = (props) => {
  //console.log(props);

  let showUsers = () => {
    return props.users.map((u, index) => {
      return (
        <div key={index}>
          {u.name} id={u.id}
          <span>
            <NavLink to={`/profile/${u.id}`}>
              <div>
                <img className="user-photo__small" src={u.photos.small ? u.photos.small : personImg} alt="ss" />
              </div>
            </NavLink>
            <div className="">
              {!u.followed ? (
                <button 
                
                  disabled={props.followingInProgress.some(x => x === u.id)} 
                  onClick={() => {
                    props.followThunkCreator(u.id)
/*                     props.setIsFollowingProgress(true, u.id)
                      userAPI.follow(u.id)
                        .then((data) => {
                          if (data.resultCode == 0){ //meaning result is successful
                            props.follow(u.id)
                          }
                          props.setIsFollowingProgress(false, u.id)
                        }
                      ) */
                    }
                }>Follow</button>
              ) : (
                <button 
                  disabled={props.followingInProgress.some(id => id === u.id)} 
                  onClick={() =>{
                    props.unfollowThunkCreator(u.id)
                    }
                  }>
                  unFollow
                </button>
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

  const pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const classNameSrc = (page) =>
    `u-paginator__item ${
      props.currentPage === page && "u-paginator__item--active"
    }`;
  const clickPaginator = (page) => {
    return props.currentPage(page);
  };

  const onPageChanged2 = (page) => {
    console.log(page)
  }

  return (
    /* Start paginator */
    <div className="">
      <div className="u-paginator">
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={classNameSrc(page)}
              onClick={() => props.onPageChanged(page)}         >
              {page}
            </span>
          );
        })}
      </div>
      {/* End paginator */}

      {/* Start show Users */}
      <div className="">{showUsers()}</div>
      {/*End show Users */}
    </div>
  );
}

export default Users