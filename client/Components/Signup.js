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
        <div id="panel">
          <p id="panelTitle">Sign up</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={this.state.name} onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            <input type="password" name="password2" placeholder="Confirm Password" value={this.state.password} onChange={this.handleChange}/>
            <input type="submit" value="Signup"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
