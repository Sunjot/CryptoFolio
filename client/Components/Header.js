import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div id="header">
        {this.props.loggedIn === "false" &&
          <div>
            <Link className="header-links" to="/">Home</Link>
            <Link className="header-links" to="/login">Login</Link>
            <Link className="header-links" to="/signup">Signup</Link>
          </div>
        }
        {this.props.loggedIn === "true" &&
          <div>
            <Link className="header-links" to="/">Home</Link>
            <Link className="header-links" to="/login">Logout</Link>
          </div>
        }
      </div>
    );
  }
}

export default Header;
