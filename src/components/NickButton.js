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
    fontSize: 25,
  }
}));

const buttonValues = ['Zet', 'H', 'S', 'M']

export default function ContainedButtons({
  onclick, onChange,
}) {
  const classes = useStyles();

  return (

    <Router>
      <React.Fragment>
        {
          buttonValues.map(v => (
            <Link to={`/${v}`} style={{ textDecoration: 'none' }}>
              <Button value={v} variant="contained"
                className={classes.button}>
                {v}
              </Button>
            </Link>
          ))
        }
        {<main>
          <Route path={`/:lifeandfamily`}
            component={(match) => <LifecycleAndFamily dvalue={match}
              onChange={onChange} />} />
        </main>}
      </React.Fragment>
    </Router>
  );
}