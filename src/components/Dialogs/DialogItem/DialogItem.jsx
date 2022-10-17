import React from "react";
import { NavLink } from "react-router-dom"

//**** page Dialogs */
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
  
    return (
      <div className="dialogs__names--item">
        {/* <NavLink to={path}>{ props.name }</NavLink> */}
        <NavLink to={String(props.id)}>{ props.name } </NavLink>
      </div>
    )
  }

export default DialogItem