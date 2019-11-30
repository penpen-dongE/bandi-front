import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import "./../styles/Chat.css";
import "./../styles/Home.css";
import bandi from '../assets/bandii.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import App from '../App';

//시작하기 버튼 이미지
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default class Home extends Component {
  render() {
    return (
      <Router> {/*라우터로 감싸야 이동이 가능하다. */}
        <React.Fragment>
          <div className="bandibot" >

            <div className="header">
              <Header />
            </div>

            <div className='main'>
              <img src={bandi} className="bandi" alt={bandi} /> {/*그림불러올때, alt 필요 */}
              <span>

              </span>
              <Link to="/intro" style={{ textDecoration: 'none' }}>
                <Button className="btn-home" variant="outlined" color="primary">
                  반디봇 시작하기
              </Button>
              </Link>
            </div>

          </div>
          {
            <main>
              <Route path={`/intro`} component={() => <App />} />
            </main>
          }
        </React.Fragment>
      </Router>
    )
  }
}