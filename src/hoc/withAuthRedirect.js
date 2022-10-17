import React from "react";
import {
    Navigate, // == redirect
  } from "react-router-dom";
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    //console.log('ffff withAuthRedirect RX component: ' + Component.name);
    
    class RedirectComponent extends Component {
        componentDidMount() {
            //console.log('ffff2 withAuthRedirect RX component: ' + Component.name);
            //console.log('ffff2 this.props.isAuth RX value: ' + !this.props.isAuth);
        }
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login" replace={true} />;
              }
              return <Component {...this.props} />;
        }
    }

/*         const mapStateToPropsForRedirect = (state) => ({
            isAuth: state.auth.isAuth
        }) */

        const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

      
    //return RedirectComponent;
    return ConnectedAuthRedirectComponent
}