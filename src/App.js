import React, { Component } from 'react';
// import Header from './components/Header';
// import Family from './components/Family';
import Nickname from './components/Nickname';
import UserInfo from './components/UserInfo';
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="bandibot">
        <React.Fragment>
          <div className="header">
            Header자리
          </div>
          <div className="userinfo">
            <UserInfo />
          </div>
          <div className="nickname">
            <Nickname />
          </div>
        </React.Fragment>
      </div>
    );
  }

}

export default App;
