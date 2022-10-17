import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = (props) => {
  //debugger
  const login = props.isAuth ? props.login : 'Login'

  return (
    <header className="header">
      <div className="logo"></div>
      
        <Link to="/login">
          <div className="login-block">{login}</div>
        </Link>

      
    </header>
  );
};

export default Header;
