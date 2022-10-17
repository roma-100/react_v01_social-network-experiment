import React from "react";

//**** page Dialogs */
  
  const Message = (props) => {
    return (
      <div className="dialog__messages--item">{ props.message }</div>
    )
  }

export default Message