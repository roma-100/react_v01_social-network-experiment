import React from "react";
import "./Profile.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";
import { connect } from "react-redux";
import {
  setUserProfile,
  getUserProfileThunk,
  getStatusThunk,
  updateStatusThunk
} from "../../redux/reducer-profile";
import Profile from "./Profile";
import {
  Navigate, // == redirect
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from "react-router-dom";
import { userAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

//=== Start Class ProfileContainer ===
class ProfileContainer extends React.Component {
  componentDidMount() {
    //debugger
    let userId = 2;
    // а вдруг не число?
    if (
      this.props.router.params.userId &&
      parseInt(this.props.router.params.userId) > 0
    ) {
      userId = this.props.router.params.userId;
    }

    console.log("log: DidMount ProfileContainer");

    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId)
    
  }

  render() {
    return (
      <div>
        <Profile {...this.props} 
                  profile = {this.props.profile}
                  status = {this.props.status}
                  updateStatus = {this.props.updateStatusThunk}
                  />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status

});

const mapDispatchToProps = {
  /* setUserProfile, */
  getUserProfileThunk,
  getStatusThunk,
  updateStatusThunk
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let match = useMatch("/profile/25714");
    return (
      <Component {...props} router={{ location, navigate, params, match }} />
    );
  }

  return ComponentWithRouterProp;
}

//const WithUrlDataProfileContainer = withRouter(ProfileContainer)
//const WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)
//const ComplexProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer);

const ComplexProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter //, withAuthRedirect
)(ProfileContainer);

export default ComplexProfileContainer;
