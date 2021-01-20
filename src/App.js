import { useState } from 'react';
import { getUser,logout } from './services/userService';
import {useEffect } from 'react';
import { getContentInfo } from './services/net-api';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import PrePaywallPage from './pages/PrePaywallPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Switch, Route, withRouter, Redirect } from 'react-router-dom';


function App(props) {

  /*
  const [movieData, setMovieData ] = useState({
    COUNT: "",
    ITEMS: []
  })

  async function getAppData(){
    const data = await getContentInfo();
    setMovieData(data);
    console.log(data);
  }

  useEffect(() => {
    getAppData();
  }, []);

*/
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
              <PrePaywallPage />
            } />
            <Route exact path="/home" render={props => 
              userSate.user ?
                <HomePage />
                :
                <Redirect to="/login" />
            } />
            <Route exact path="/dashboard" render={props => 
              userSate.user ?
                <DashboardPage />
                :
                <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props => 
              <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
            } />
            <Route exact path="/login" render={props => 
              <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
