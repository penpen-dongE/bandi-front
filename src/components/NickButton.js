import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
//import LifecycleAndFamily from './LifecycleAndFamily';
import ddImg1 from '../assets/ddd1.png';
import ddImg2 from '../assets/ddd2.png';
import ddImg3 from '../assets/ddd3.png';
import ddImg4 from '../assets/ddd4.png';
import Chat from "./Chat";

// import App from '../App';


const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 28,
    margin: 10,
    borderRadius: '50%',
    height: '144px',
    width: '144px',
    padding: '0 30px',
    justifyContent: 'space-around',
    fontSize: 25,
    textDecoration: 'none',
    boxShodow: '0px',
    text: 'none',
  }
}));

const buttonValues = ['Z', 'H', 'S', 'M']
//const imgValues = [ddImg1, ddImg2, ddImg3, ddImg4]
//const buttonValues = [ddImg1, ddImg2, ddImg3, ddImg4]

export default function ContainedButtons({
  onclick, onChange,
}) {
  const classes = useStyles();

  console.log(onChange);
  return (

    <Router>
      <React.Fragment>
        {
          buttonValues.map(v => (

            <Link to={`/${v}`} style={{ textDecoration: 'none' }}>
              <Button className="nickBtn" value={v} onClick={onChange}
                className={classes.button} style={{ text: 'none' }}>
                {
                  (v === 'Z') &&
                  <img src={ddImg3} alt="Zet" id="nickimg" />
                }
                {
                  (v === 'H') &&
                  <img src={ddImg1} alt="H" id="nickimg" />
                }
                {
                  (v === 'S') &&
                  <img src={ddImg2} alt="S" id="nickimg" />
                }
                {
                  (v === 'M') &&
                  <img src={ddImg4} alt="M" id="nickimg" />
                }
              </Button>
            </Link>
          ))
        }
        {
          <Route path={`/intro/:chat`}
            component={() => <Chat />} />
        }
      </React.Fragment>
    </Router>
  );
}