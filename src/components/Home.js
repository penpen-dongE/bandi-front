import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Header';
import "./../styles/Chat.css";
import "./../styles/Home.css";
import bandi from '../assets/mainprofile.png';
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
    console.log('render')
    return (
      <React.Fragment>


        <Switch>
          <Route path="/intro" component={() => <App />} />
          <Route>
            <div className="bandibot" >

              <div className="header">
                <Header />
              </div>

              <div className='main'>
                {/*그림불러올때, alt 필요 */}
                <span>

                </span>
                <Link to="/intro" style={{ textDecoration: 'none' }}>
                  <Button className="btn-home" variant="outlined" color="primary">
                    반디봇 시작하기
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