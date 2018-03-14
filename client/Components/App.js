import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
    fetch('/register', {
      method: 'POST'
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name"/>
          Email: <input type="text" name="email"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
