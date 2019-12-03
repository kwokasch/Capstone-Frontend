import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IntroPage from './containers/IntroPage';
import SearchPage from './containers/SearchPage';
import LoginSignupPage from './containers/LoginSignupPage';
import LoginToken from './components/LoginToken';
// import PrivateRoute from './components/PrivateRoute'
import UserProfile from './components/UserProfile';
import LostFoundPage from './containers/LostFoundPage';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import NavBar from './components/NavBar';
import './App.css';

// const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    isLoggedIn: false,
    currentUser: null,
    token: ''
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    })
  }
 
  setToken = (token) => {
    this.setState({ token })
  }

  logInUser = async(token) => {
    this.setToken(token)

    localStorage.setItem ('token', token)
    const base64Url = token.split('.')[1]
    const user = JSON.parse(window.atob(base64Url))
    await this.setUser(user)

    this.setState({isLoggedIn: !this.state.isLoggedIn})

    window.location.href = "http://localhost:3001/userprofile"
  }

  logOutUser = () => {
    localStorage.removeItem('token')
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <header>
            <div className="header-container">
                <Header />
                <NavBar 
                  currentUser={this.state.currentUser}
                  isLoggedIn={this.state.isLoggedIn}
                  logOutUser={this.logOutUser}/>
            </div>
            <div className="subheader">
                <SubHeader />
            </div>
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/login" render={props => <LoginSignupPage {...props} setUser={this.setUser}/>} />
          <Route exact path="/login/token" render={props => <LoginToken {...props} logInUser={this.logInUser} setToken={this.setToken}/>} />
          <Route exact path="/search" render={props => <SearchPage {...props} allPets={this.state.allPets}/>} />
          {/* <PrivateRoute exact path="/" isLoggedIn={this.state.isLoggedIn} currentUser={this.state.currentUser} /> */}
          <Route exact path="/userprofile" render={props => <UserProfile {...props} setUser={this.setUser} currentUser={this.state.currentUser}/>} />
          <Route exact path="/lostfound" render={props => <LostFoundPage {...props} setPet={this.setPet}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;