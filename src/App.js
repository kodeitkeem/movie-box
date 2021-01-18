import { useState } from 'react';
import { getUser,logout } from './services/userService';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import {Switch, Route, withRouter, Redirect } from 'react-router-dom';

function App(props) {
  const [ userSate, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin(){
    setUserState({
      user: getUser()
    })
  }

  function handleLogout(){
    logout();
    setUserState({
      user: null
    })
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userSate.user}/>
        <main>
          <Switch>
            <Route exact path="/" render={props => 
              <HomePage />
            } />
            <Route exact path="/dashboard" render={props => 
              userSate.user ?
                <DashboardPage />
                :
                <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props => 
              <SignupPage {...props}/>
            } />
            <Route exact path="/login" render={props => 
              <LoginPage {...props}/>
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
