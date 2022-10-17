import {authAPI} from '../api/api'

const SET_USER_DATA = 'FOLLOSET_USER_DATAW'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  //isFetching: false
};

/* ==== Actions ==== */
const authReducer = (state=initialState, action) => {
    if (action.type === SET_USER_DATA) {
        
        const stateCopy = { 
            ...state, 
            ...action.data,
            isAuth: true
        }
        //debugger
        return stateCopy
    } 
    
    return state
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, 
                                                        data: { userId, email, login}}); //create action.type, action.userID
export const getAuthUserDataThunk = () => {
    //console.log('ddd1')
    return (dispatch) => {
        //console.log('ddd2')
        authAPI.me()
        .then((data) => {
          //console.log("response.data.resultCode: " + data);
          if (data.resultCode === 0) {
            //declare nev variables
            const { id, login, email } = data.data
            dispatch(setAuthUserData(id, login, email))
            //debugger
          }
        });
/*         dispatch(setIsFollowingProgress(true, userId))
        userAPI.follow(userId)
          .then((data) => {
            if (data.resultCode == 0){ //meaning result is successful
                dispatch(follow(userId))
            }
            dispatch(setIsFollowingProgress(false, userId))
          }
        ) */
        }
}

export default authReducer