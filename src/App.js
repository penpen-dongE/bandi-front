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
      chatState: false,
      userName: '',
    };
    this._chatStateChange = this._chatStateChange.bind(this);
    this._handOver = this._handOver.bind(this);
  }

  _chatStateChange = (userName) => {

    this.setState({
      chatState: true,
      userName: userName,
    })
  };

  _handOver = (userName) => {
    this.setState({
      userNameF: userName
    })
  }

  render() {
    let { chatState } = this.state;
    if (!chatState) {
      return (
        <BrowserRouter>
          <div className="bandibot" >
            <React.Fragment>
              <div className="header">
                <Header />
              </div>
              <div className="nickname">
                <Nickname onChange={this._chatStateChange} />
              </div>
            </React.Fragment>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <div className="bandibot">
          <React.Fragment>
            <div className="header">
              <Header />
            </div>
            <div className="chat">
              <Chat value={this.state.userName} />
            </div>
          </React.Fragment>
        </div>
      );
    }

  }

}

export default App;
