import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Logo from '../../public/logo.png';

class Home extends React.Component {

  render() {
    return (
      <div id="home">
        { this.props.loggedIn === "true" &&
          <h1>Homepage Logged in</h1>
        }
        { this.props.loggedIn === "false" &&
          <div id="cover">
            <img src={Logo}/>
            <p>The ideal portfolio tool for all your Crypto needs.</p>
          </div>
        }
      </div>
    );
  }
}

export default Home;
