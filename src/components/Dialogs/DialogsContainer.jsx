import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator
} from "../../redux/reducer-dialogs";
import { connect } from 'react-redux'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

class DialogsContainer extends React.Component {
  componentDidMount() {
    console.log ('DialogsContainer props: ' + this.props.dialogPages.dialogs[0].name)
  }
  render() {
    
    //debugger
    return (
      <div>
        <Dialogs {...this.props} 
            />
    </div>      
    );
  }
}

// Let's make 2 wrap connect
/* const authDialogsContainerBurger = withAuthRedirect(DialogsContainer)
const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
const authDialogsContainer = connect(mapStateToPropsForRedirect)(authDialogsContainerBurger)

 */
//const authDialogsContainer = withAuthRedirect(DialogsContainer)

const mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogsReducer,
  }
}

let mapDispatchToProps = (dispatch) => {  
  return {
    sendMessageCreator: (newMessage) => {
      dispatch(sendMessageCreator(newMessage)) 
    }
  }
}


//const ComplexDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authDialogsContainer);
const ComplexDialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer)


export default ComplexDialogsContainer;