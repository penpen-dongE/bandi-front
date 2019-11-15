import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
// import Family from './components/Family';
import Nickname from './components/Nickname';
import './styles/App.css';
// import LifecycleAndFamily from './components/LifecycleAndFamily';
import Chat from './components/Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatState: false
    };
  }

  render() {
    const chatState = this.state.chatState

    if (!chatState) {
      return (
        <BrowserRouter>
          <div className="bandibot">
            <React.Fragment>
              <div className="header">
                <Header />
              </div>
              <div className="nickname">
                <Nickname />
              </div>
            </React.Fragment>
          </div>
        </BrowserRouter>
      );
    } return (
      <div className="bandibot">
        <React.Fragment>
          <div className="header">
            <Header />
          </div>
          <div className="chat">
            <Chat />
          </div>
        </React.Fragment>
      </div>

    );

  }

}

export default App;
