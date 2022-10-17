import React from "react";
import  { Navigate } from 'react-router-dom'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
//**** page Dialogs */
const Dialogs = (props) => {
  //debugger
  //console.log (props)
  //console.log("lllook: Dialogs");
  const dialogNames = props.dialogPages.dialogs.map((dialogs, index) => (
    <DialogItem name={dialogs.name} id={dialogs.id} key={index} />
  ));
  const messageElements = props.dialogPages.messages.map((msg, index) => (
    <Message message={msg.message} key={index}/>
  ));
  const addNewMessage = (value) => {
    //console.log(value.newMessage)
    props.sendMessageCreator(value.newMessage)
  }
  
  return (
    <div className="dialogs">
      <div className="dialogs-names">
        {dialogNames}
      </div>
      <div className="dialogs-messages"> 
        {messageElements}
        <AddMessageFormRedux 
        onSubmit={addNewMessage}
        />
      </div>
    </div>
  );
};
//*** End Dialogs */
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div className="dialogs-text-input">
      <Field component="textarea" name="newMessage"
            placeholder="Write your message here"
      />
    </div>
    <div><button>Send</button></div>
  </form>      
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
