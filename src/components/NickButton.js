import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import LifecycleAndFamily from './LifecycleAndFamily';
// import App from '../App';


const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 30,
    margin: 10,
    background: 'linear-gradient(45deg, #8bc34a 30%, #dce775 90%)',
    borderRadius: 3,
    height: 50,
    width: 150,
    padding: '0 30px',
    justifyContent: 'space-around',
    fontSize: 25
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>

        <Link to='/family'>
          <Button value="Zet" variant="contained"
            onClick={function (e) {
              this.props.btnClickedNickname();
            }}
            className={classes.button}>
            Zet
          </Button>
        </Link>
        <Link to='/family'>
          <Button value="H" variant="contained"
            onClick={function (e) {
              this.props.btnClickedNickname();
            }.bind(this)}
            className={classes.button}>
            H
          </Button>
        </Link>

        <Link to='/family'>
          <Button value="S" variant="contained"
            onClick={function (e) {
              this.props.btnClickedNickname();
            }.bind(this)}
            className={classes.button}>
            S
         </Button>
        </Link>

        <Link to='/family'>
          <Button value="M" variant="contained"
            onClick={function (e) {
              this.props.btnClickedNickname();
            }.bind(this)}
            className={classes.button}>
            M
          </Button>
        </Link>
        {<main>
          <Route path="/family" component={LifecycleAndFamily} />
        </main>}
      </React.Fragment>
    </Router>

  );
}