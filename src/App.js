import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
// import Family from './components/Family';
import Nickname from './components/Nickname';
// import UserInfo from './components/UserInfo';
import './styles/App.css';
import LifecycleAndFamily from './components/LifecycleAndFamily';

//import LifecycleAndFamily from './components/LifecycleAndFamily';

class App extends Component {

  render() {
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
            {/* <div className="lifecycleandfamily">
              <LifecycleAndFamily />
            </div>
            */}
          </React.Fragment>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
