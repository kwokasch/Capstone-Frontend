import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IntroPage from './containers/IntroPage';
import LoginSignupPage from './containers/LoginSignupPage';
import LostFoundPage from './containers/LostFoundPage';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import NavBar from './components/NavBar';
import './App.css';

const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    currentUser: null,
    currentPet: null
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setPet = (pet) => {
    this.setState({
      currentPet: pet
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <header>
            <div className="header-container">
                <Header />
                <NavBar currentUser={this.state.currentUser}/>
            </div>
            <div className="subheader">
                <SubHeader />
            </div>
          </header>
        </div>
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/login" render={props => <LoginSignupPage {...props} setUser={this.setUser}/>} />
            <Route exact path="/lostfound" render={props => <LostFoundPage {...props} setPet={this.setPet}/>} />
          </Switch>
      </Router>
    );
  }
}

export default App;
