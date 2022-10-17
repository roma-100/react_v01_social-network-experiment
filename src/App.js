import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Xtest from "./components/Xtest/Xtest"
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom";
import Login from "./components/Login/Login";

function App(props) {
  //debugger
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <main className="maincontent">
          <Routes>
            {/* profile/:userId? опциональный */}
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/xtest" element={<Xtest />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/users" element={<UsersContainer />} />
            
          </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
}

//new page

const News = () => {
  return <h2>Here's News</h2>;
}
const Hello = () => {
  return <h2>Here's Helloooo!!!! I'm in processing...</h2>;
}
const NotFound = () => {
  return <h2>Error 404! Not Found Page</h2>;
}



export default App;
