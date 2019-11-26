import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import LifecycleAndFamily from './LifecycleAndFamily';
import ddImg1 from '../assets/ddd1.png';
import ddImg2 from '../assets/ddd2.png';
import ddImg3 from '../assets/ddd3.png';
import ddImg4 from '../assets/ddd4.png';


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

const buttonValues = ['Z', 'H', 'S', 'M']
// const imgvalues = [ddImg1, ddImg2, ddImg3, ddImg4]

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
                {
                  (v === 'Z') &&
                  <img src={ddImg3} alt="Zet" id="nickimg" />
                }
                {
                  (v === 'H') &&
                  <img src={ddImg1} alt="Zet" id="nickimg" />
                }
                {
                  (v === 'S') &&
                  <img src={ddImg2} alt="Zet" id="nickimg" />
                }
                {
                  (v === 'M') &&
                  <img src={ddImg4} alt="Zet" id="nickimg" />
                }
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