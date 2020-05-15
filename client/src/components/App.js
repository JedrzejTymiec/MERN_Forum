import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppNavbar from './nav/Navbar';
import PostForm from './posts/CreatePost';
import PostsList from './posts/PostsList';
import EditPost from './posts/EditPost';
import Discussion from './posts/Discussion';
import MainPage from './subpages/MainPage';
import About from './subpages/About'
import Contact from './subpages/Contact'
import UserRegisterForm from './userLoginAndRegistration/UserRegisterForm';
import SidebarNav from './nav/SidebarNav';
import UserList from './userLoginAndRegistration/UserList';
import Login from './userLoginAndRegistration/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <header><AppNavbar /></header>
        <div className="app-body">
        <SidebarNav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/create-article" component={PostForm} />
            <Route path="/posts-list" component={PostsList} />
            <Route path="/edit-post/:id" component={EditPost} />
            <Route path="/discussion/:id" component={Discussion} />
            <Route path="/register/" component={UserRegisterForm} />
            <Route path="/users-list/" component={UserList} />
            <Route path="/log-in/" component={Login} />
          </Switch>  
        </div>
      </Router>
    );
  }
}

export default App;
