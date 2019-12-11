import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import "./../styles/Home.css";
import Button from '@material-ui/core/Button';
import App from '../App';
import logoBig from "../assets/logoBig.png";
import startBtn from "../assets/start-btn.png";

export default class Home extends Component {
  render() {
    console.log('render')
    return (
      <React.Fragment>
        <Switch>
          <Route path="/intro" component={() => <App />} />
          <Route>
            <div className='main'>
              <div className="logoBig">
                <img src={logoBig} alt="logo-big" />
              </div>

              {/*그림불러올때, alt 필요 */}
              <div className="start-btn">
                <Link to="/intro" style={{ textDecoration: 'none' }}>
                  <Button>
                    <img src={startBtn} alt="start-btn" />
                  </Button>
                </Link>
              </div>
            </div>
          </Route>
        </Switch>

      </React.Fragment>
    )
  }
}