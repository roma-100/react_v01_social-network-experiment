import {userAPI} from '../api/api'

const FOLLOW = 'FOLLOW', 
      UNFOLLOW = 'UNFOLLOW', 
      SET_USERS = 'SET_USERS',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
      SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
      TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users:[],
  pageSize: 10, //limit users
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state=initialState, action) => {
    if (action.type === FOLLOW) {
      
        const stateCopy = { 
            ...state, 
            users: state.users.map ( //возвр новый объект
                user => { 
                  return (user.id === action.userID) ? {...user,followed: true} : user;
                }
            )
        }
        //debugger
        return stateCopy
    }
    if (action.type === UNFOLLOW) {
      
        const stateCopy = { 
            ...state, 
            users: state.users.map ( //возвр новый объект
                user => { 
                    return (user.id === action.userID) ? {...user,followed: false} : user;
                }
            )
        }
        //debugger
        return stateCopy
    }
    if (action.type === SET_USERS) {
        const stateCopy = { 
            //...state, users: [...state.users, ...action.users]
            ...state, users: action.users
        }
        //debugger
        return stateCopy
    }
    if (action.type === SET_TOTAL_USERS_COUNT) {
        const showCounts = () => action.totalCount > 50 ? 50 : action.totalCount;
        const stateCopy = { 
            //...state, users: [...state.users, ...action.users]
            ...state, totalUsersCount: showCounts()
        }
        //debugger
        return stateCopy
    }
    if (action.type === SET_CURRENT_PAGE) {
        //debugger
        const stateCopy = { 
            ...state, currentPage: action.currentPage
        }
        //debugger
        return stateCopy
    }    
    if (action.type === TOGGLE_IS_FETCHING) {
        //debugger
        const stateCopy = { 
            ...state, isFetching: action.isFetching
        }
        //debugger
        return stateCopy
    }  
    if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
        //debugger
         //console.log('state.followingInProgress2: ' + window.store.getState().usersPage)
        const stateCopy = { 
            ...state, 
            followingInProgress: action.isFetching 
            ? [action.isFetching, action.userId]
            : []
        }
        //debugger
        return stateCopy
    }  
    
    return state
}

export const follow = (userID) => ({ type: FOLLOW, userID}); //create action.type, action.userID
export const unfollow = (userID) => ({ type: UNFOLLOW, userID});//create action.type, action.userID
export const setUsers = users => ({ type: SET_USERS, users});//create action.type, action.users
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const setIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

//****middle ware****
export const getUsersThunkCreator = (currentPage, pageSize) =>{
    //debugger
    
   return (dispatch) => {
        //this.props.setIsFetching (true)
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching (true))
    
        userAPI.getUsers(currentPage, pageSize) //from api
        /* 
        const httpQuery = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(httpQuery,{withCredentials: true}) */
        .then((data) => {
          //this.props.setIsFetching (false)
          dispatch(setIsFetching (false))
          //this.props.setUsers(extractData);
          dispatch(setUsers(data.items));
          //this.props.setTotalUsersCount(data.totalCount);
          dispatch(setTotalUsersCount(data.totalCount));
          
        });
        //this.props.setUsers([]);
       // dispatch(setUsers([]));
    }
}

export const followThunkCreator = (userId) =>{
    //debugger
    
   return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId))
    userAPI.follow(userId)
      .then((data) => {
        if (data.resultCode == 0){ //meaning result is successful
            dispatch(follow(userId))
        }
        dispatch(setIsFollowingProgress(false, userId))
      }
    )
    }
}

export const unfollowThunkCreator = (userId) =>{
    //debugger
    
   return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId))
    userAPI.unfollow(userId)
        .then((data) => {
          if (data.resultCode == 0){
            dispatch(unfollow(userId))
          }
          dispatch(setIsFollowingProgress(false, userId))
        }
      )
    }
}

export default usersReducer