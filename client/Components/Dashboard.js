import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    if (this.props.loggedIn === "true")
      return (
        <div>Dashboard</div>
      );
    else
      return <Redirect to="/" />
  }
}

export default Dashboard;
