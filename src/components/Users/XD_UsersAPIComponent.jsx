import * as axios from "axios";
import React from "react";
import Users from './Users'


class UsersAPIComponent extends React.Component {
  firstCall = true;
  constructor(props) {
    super(props);
  }

  initUsers = () => {
    const httpQuery = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(httpQuery).then((response) => {
      const extractData = response.data.items;
      //debugger
      this.props.setUsers(extractData);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
    this.props.setUsers([]);
    //debugger
  };
  showInitButton = () => {
    if (this.props.users.length === 0) {
      return <button onClick={this.initUsers}>initData</button>;
    }
    return null;
  };

  onPageChanged = (pageNumber) => {
    //debugger
    this.props.setCurrentPage(pageNumber);
    const httpQuery = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(httpQuery).then((response) => {
      const extractData = response.data.items;
      //debugger
      this.props.setUsers(extractData);
    });
  };

  componentDidMount() {
    console.log("componentDidMount firstCall: " + this.firstCall);
    if (this.firstCall) {
      this.initUsers();
    }
    this.firstCall = false;
  }
  render() {
    return (
      <div className="">
        <div className="">{this.showInitButton()}</div>

        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount = {this.props.totalUsersCount}
        />
        
      </div>
    );
  }
}

export default UsersAPIComponent;
