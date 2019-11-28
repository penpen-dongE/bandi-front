import React, { Component } from 'react';
import Header from './Header';
import "./../styles/Chat.css";
import "./../styles/Home.css"

export default class Home extends Component {
    render() {
        return (

            <div className="bandibot" >
            <React.Fragment>
              <div className="header">
                <Header />
              </div>
              <div className='main'>Home 입니다.</div>
                
            </React.Fragment>
          </div>

        )
    }
}
