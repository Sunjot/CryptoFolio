import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    }
  }

  handleChange = (e) => {
    if (e.target.name === "username") {
      this.setState({
        name: e.target.value
      });
    }
    if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.name,
        password: this.state.password
      }),
      headers: new Headers({
        "content-type": "application/json"
      }),
      credentials: 'include'
    }).then((res) => {
      return res.text();
    }).then((data) => {
      if (data === "true") {
        this.props.getUserData();
      }
    });
  }

  render() {

    if (this.props.loggedIn === "false")
      return (
        <div id="login">
          <h1>Login Page</h1>
          <form onSubmit={this.handleSubmit}>
            Name: <input type="text" name="username" value={this.state.name} onChange={this.handleChange}/>
            Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );
    else
      return <Redirect to="/dashboard" />
  }
}

export default withRouter(Login);
