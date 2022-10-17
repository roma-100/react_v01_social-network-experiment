import React from "react";
import "./Sidebar.css";
/* import mycss from './Sidebar.css'; */
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs">
              Dialogs
            </NavLink>
          </li>          
          <li>
            <NavLink to="/users">
              Users
            </NavLink>
          </li>  
          <li>
            <LinkMsg />
          </li>
          <li><LinkJet to="/test" txt='Test'/></li>
          <li>
            <NavLink to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/hello">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/xtest">
              Xtest
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const LinkMsg = () => (
  <NavLink to="/hello" activeclassname="active" test='test'>
    Messages
  </NavLink>
);
const LinkJet = (props) => {
  return (
  <NavLink to={props.to} activeclassname="active">
    {props.txt}
  </NavLink>
)
};



export default Sidebar;
