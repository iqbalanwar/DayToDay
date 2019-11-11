import React, {Component} from 'react';
import './App.css';

// Custom Components
import Login from './Login';
import Calendar from './Components/calendar';

class App extends Component {

  state = {
    isLoggedIn: false,
    user : {
      username: "",
      password: ""
    }
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
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res =>  res.json())
      .then(res => {
        this.setState({
          user : {
            username: "",
            password: ""
          },
          token: res
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
          username={this.state.user.username}
          password={this.state.user.password}
        />

        <Calendar />

        <footer style={{
          textAlign: "center",
          padding: "15px",
          color: "black",
          fontSize: "1.5em"
        }}> Iqbal Anwar &copy; </footer>
      </div>
    );
  }
}

export default App;