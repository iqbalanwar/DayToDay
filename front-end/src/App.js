import React, {Component} from 'react';
import './App.css';

// Custom Components
import Login from './Login';
import Calendar from './Components/Calendar';

class App extends Component {

  state = {
    isLoggedIn: false,
    username: "",
    password: "",
    token: ""
  }

  submitLogin = (e) => {
    e.preventDefault(); //stops page refresh
    console.log('login submission form');
    
    fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res =>  res.json())
      .then(res => {
        console.log(res, "I got a response!")
        this.setState({
          username: "",
          password: "",
          token: res.token,
          isLoggedIn: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Login 
          handleUsernameChange = {this.handleUsernameChange}
          handlePasswordChange = {this.handlePasswordChange}
          submitLogin = {this.submitLogin}
          username={this.state.username}
          password={this.state.password}
        />

        <Calendar token = {this.state.token}/>

        <footer style={{
          textAlign: "center",
          padding: "15px",
          color: "black",
          fontSize: "1.5em",
          borderTop: "1px solid black"
        }}> <i>Day-To-Day</i> &copy; was made by Iqbal Anwar </footer>
      </div>
    );
  }
}

export default App;