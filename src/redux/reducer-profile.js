import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

const initialState = {
  posts: [
    { id: 1, message: "This is my first post.", likesCount: 12 },
    { id: 1, message: "Second post. Hello everybody", likesCount: 11 },
  ],
  profile: null,
  status: 'initial status'
}

const profileReducer = (state=initialState, action) => {
    //debugger
    //********* POST: ADD_POST **** ****/
    if (action.type === ADD_POST) {
      const stateCopy = {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 3,
            message: action.newPost,
            likesCount: 0,
          },
        ],
      };
      return stateCopy;
    }
      //*********POST: UPDATE_NEW_POST_TEXT ********/
      if (action.type === SET_USER_PROFILE) {
        //debugger
        return (
          {...state, 
          profile: action.profile}
        )
      }
      if (action.type === SET_STATUS) {
        //debugger
        return (
          {...state, 
          status: action.status}
        )
      }      
    return state
}


export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfileThunk = (userId) => {
  //console.log('hello userId: ' + userId)
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then (data => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getStatusThunk = (userId) => {
  //console.log('hello userId: ' + userId)
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then (data => {
      dispatch(setStatus(data));
    })
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then (data => {
      data.resultCode ===0 && dispatch(setStatus(status));
    })
  }
}

export default profileReducer