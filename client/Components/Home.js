import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../public/logo.png';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

  render() {
    if (this.props.loggedIn === "false")
      return (
        <div id="home">
          <div id="cover">
            <img src={Logo}/>
            <p>The ideal portfolio tool for all your Crypto needs.</p>
          </div>
        </div>
      );
    else
      return <Redirect to="/dashboard" />
  }
}

export default Home;
