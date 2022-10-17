import React from "react";
import { follow, 
         unfollow, 
         setUsers, 
         setCurrentPage,
         setTotalUsersCount,
         setIsFetching,
         setIsFollowingProgress,
         getUsersThunkCreator,
         followThunkCreator,
         unfollowThunkCreator } from '../../redux/reducer-users'
//{followAC, unfollowAC, setUsersAC} //reducer-users
import { connect } from 'react-redux'
import * as axios from "axios";
import Users from './Users';
import Preloader from '../../components/commonBlocks/Preloader/PreloaderWaive'
import {userAPI} from '../../api/api'
/* import Preloader from '../../components/commonBlocks/Preloader/PreloaderRing' */
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux'
//***** Start insert UsersAPIComponent */
 


class UsersContainer extends React.Component {
  firstCall = true;
  constructor(props) {
    super(props);
  }

  initUsers = () => {
    //axios({timeout: 5000}) //Increase time of spiner
    //apply Thunk trick
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
/*     this.props.setIsFetching (true)
    userAPI.getUsers(this.props.currentPage, this.props.pageSize) //from api
    .then((data) => {
      const extractData = data.items;
      //debugger
      this.props.setIsFetching (false)
      this.props.setUsers(extractData);
      this.props.setTotalUsersCount(data.totalCount);
    }); */

    //this.props.setUsers([]);
    //debugger
    
  };
  showInitButton = () => {
    if (this.props.users.length === 0) {
      
      return <button onClick={this.initUsers}>initData</button>;
    }
    return null;
  };

  onPageChanged = (pageNumber) => {
    
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
/*     this.props.setIsFetching (true)
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize)
    .then((data) => {
      const extractData = data.items;
      this.props.setIsFetching (false)
      this.props.setUsers(extractData);
    }); */
  };

  componentDidMount() {
    
    
    //console.log("componentDidMount firstCall: " + this.firstCall);
    if (this.firstCall) {
      this.initUsers();
    }
    this.firstCall = false;

    /* this.props.setIsFetchingAC (false) */
  }
  render() {
    return (
      <>
        { this.props.isFetching && <Preloader /> }
        {/* <div className="">{this.showInitButton()}</div> */}

        <Users
          users={this.props.users}
/*           follow={this.props.follow}
          unfollow={this.props.unfollow} */
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount = {this.props.totalUsersCount}
          /* setIsFollowingProgress = {this.props.setIsFollowingProgress} */
          followingInProgress = {this.props.followingInProgress}
          followThunkCreator = {this.props.followThunkCreator}
          unfollowThunkCreator = {this.props.unfollowThunkCreator}

          /* isFetching={this.props.isFetching} */
        />
        
      </>
    );
  }
}
//***** End insert UsersAPIComponent */

// Возвращаем только те данные, которые нужны ребенку
const mapStateToProps = (state) => {
  //console.log('hello!')
  //debugger
  //window.aa = state.usersPage
  return {
    users: state.usersPage.users, //usersPage: usersReducer //property is diferent because
    pageSize: state.usersPage.pageSize, //limit users
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
//Создаем dispatch
/* const mapDispatchToProps = (dispatch) => {  
  return { //props.follow(userID), props.unfollow(userID)... <- от д/очернего объекта
    //перечень данных, которые поступают в результате событий от ребенка
    follow: userID => {dispatch(followAC(userID))}, //будет props.follow обр связь с Users.jsx
    unfollow: userID => {dispatch(unfollowAC(userID))},
    setUsers: users => {dispatch(setUsersAC(users))},
    setCurrentPage: pageNumber => {dispatch(setCurrentPageAC(pageNumber))},
    setTotalUsersCount: totalCount => {dispatch(setTotalUsersCountAC(totalCount))},
    setIsFetchingAC: isFetching => {dispatch(setIsFetchingAC(isFetching))}
  }
} */
const mapDispatchToProps = {  
   //props.follow(userID), props.unfollow(userID)... <- от д/очернего объекта
    //перечень данных, которые поступают в результате событий от ребенка
    follow, //будет props.follow обр связь с Users.jsx
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setIsFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
}



/* const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer); */
//debugger
/* 
const ComplexProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps), 
  withRouter,
  withAuthRedirect
  )(ProfileContainer)

const ComplexUsersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)
(UsersContainer)
  
*/
//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

//const ComplexUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

const ComplexUsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(UsersContainer);

export default ComplexUsersContainer