import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getAuthUserDataThunk } from "../../redux/reducer-auth";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class HeaderContainer extends React.Component {
  componentDidMount() {
/*     const httpQuery = `https://social-network.samuraijs.com/api/1.0/auth/me`;
    axios
      .get(httpQuery, {
        withCredentials: true,
      }) */
/*       authAPI.me()
      .then((data) => {
        console.log("response.data.resultCode: " + data.resultCode);
        if (data.resultCode === 0) {
          //declare nev variables
          const { id, login, email } = data.data;
          this.props.setAuthUserData(id, login, email);
          //debugger
        }

        //debugger
      }); */
      this.props.getAuthUserDataThunk()

    /* 
        console.log('log: DidMount ProfileContainer')
    const httpQuery = `https://social-network.samuraijs.com/api/1.0/auth/me`;
    axios.get(httpQuery).then((response) => {
      //debugger
      this.props.setUserProfile(response.data);
      console.log('log response.data : ' + response.data.aboutMe)
    */
  }

  render() {
    //debugger
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = {
  setAuthUserData,
  getAuthUserDataThunk
};

const ComlexHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
export default ComlexHeaderContainer
