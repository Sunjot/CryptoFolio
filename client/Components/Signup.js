import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {

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
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.name,
        password: this.state.password
      }),
      headers: new Headers({
        "content-type": "application/json"
      })
    }).then((res) => {
      return res.text();
    }).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div id="signup">
        <h1>Sign up Page</h1>
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="username" value={this.state.name} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Signup;
