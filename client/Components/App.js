import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Dashboard from './Dashboard';
import '../Stylesheets/App.scss';
import { hot } from 'react-hot-loader'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedIn: ""
    }
  }

  logout = () => {
    this.setState({
      loggedIn: "false"
    });
  }

  getUserData = () => {
    fetch('http://localhost:3000/user', {
      method: 'get',
      credentials: 'include'
    }).then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        loggedIn: data
      });
    });
  }

  componentWillMount() {
    this.getUserData();
  }

  render() {
    if (this.state.loggedIn === "") // leave page blank until the fetch is done to prevent double render
      return (<div></div>);

    else
      return (
        <Router>
          <div id="App">
            <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
            <Switch>
              <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn}/>} />
              <Route exath path="/dashboard" render={() => <Dashboard loggedIn={this.state.loggedIn} />} />
              <Route exact path="/login" render={() =>
                <Login loggedIn={this.state.loggedIn} getUserData={this.getUserData}/>} />
              <Route exact path="/signup" render={() => <Signup loggedIn={this.state.loggedIn}/>} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      );
  }
}

export default hot(module)(App);
