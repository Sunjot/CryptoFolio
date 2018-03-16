import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div id="home">
        { this.props.loggedIn === "true" &&
          <h1>Homepage Logged in</h1>
        }
        { this.props.loggedIn === "false" &&
          <h1>Homepage Default</h1>
        }
      </div>
    );
  }
}

export default Home;
