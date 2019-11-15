import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';

// Custom Components
import Login from './Login';
import Calendar from './Components/Calendar';
import Signup from './Signup';

const RegLogin = styled.div`
  display: flex;
`;
const SignOutButton = styled.button`
  height: 4vh;
  font-size: 2vh;
  margin: auto 0;
`;

class App extends Component {

  state = {
    isLoggedIn: false,
    user: {
      username: "",
      password: "",
      regUsername: "",
      regPassword: "",
      token: ""
    }
  }

  submitLogin = (e) => {
    e.preventDefault(); //stops page refresh
    console.log('login submission form');
    
    fetch("http://localhost:8081/login", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res =>  res.json())
      .then(res => {
        console.log(res, "I got a response!")
        this.setState({
          user: {...this.state.user, password:"", token: res.token},
          isLoggedIn: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  submitSignup = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/signup", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.user.regUsername,
        password: this.state.user.regPassword
      })
    })
      .then(res =>  res.json())
      .then(res => {
        console.log(res, "I got a response!")
        this.setState({
          user: {...this.state.user, regPassword:"", token: res.token},
          isLoggedIn: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  signOut = (e) => {
    e.preventDefault();
    console.log("signing out!");

    this.setState({
      user: {username: "", password: "", token: ""},
      isLoggedIn: false
    })
  }

  handleInputChange = (e) => {
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}});
  }

  // toggleSignOutButton = () => {
  //   (this.state.user.token !== "") ?
  //     ({})password
  // }

  render() {
    return (
      <div className="App">
        <RegLogin>
          <Login
            handleInputChange = {this.handleInputChange}
            submitLogin = {this.submitLogin}
            username = {this.state.user.username}
            password = {this.state.user.password}
          />

          <Signup
            handleInputChange = {this.handleInputChange}
            submitSignup = {this.submitSignup}
            regUsername = {this.state.user.regUsername}
            regPassword = {this.state.user.regPassword}
          />

          <SignOutButton onClick={this.state.signOut}>Sign out</SignOutButton>
        </RegLogin>
        
        <Calendar token = {this.state.user.token}/>

        <footer style={{
          textAlign: "center",
          padding: "15px",
          color: "gray",
          fontSize: "1em"
        }}> <i>Day-To-Day</i> &copy; was made by Iqbal Anwar </footer>
      </div>
    );
  }
}

export default App;