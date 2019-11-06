import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
    <div>
      <Button variant="contained" href="#contained-buttons1" className={classes.button}>
        Zet
      </Button>
      <Button variant="contained" href="#contained-buttons2" className={classes.button}>
        H
      </Button>
      <Button variant="contained" href="#contained-buttons3" className={classes.button}>
        S
      </Button>
      <Button variant="contained" href="#contained-buttons4" className={classes.button}>
        M
      </Button>

    </div>
  );
}

