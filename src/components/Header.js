import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//app bar css
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(-7), 
    
  },
  button: {
    background : '#f9fbe7'
  }
}));

// popup css
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

//popup content css
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  
  },
}))(MuiDialogContent);

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <h3>BandiBot</h3>
          </Typography>
          <Button  className={classes.button} onClick={handleClickOpen}>사용설명서</Button>
        </Toolbar>
      </AppBar>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          반디봇 사용설명서 
        </DialogTitle>
        <DialogContent dividers>
           '처음으로' 라고 쓰시면 첫화면으로 갑니다.
        </DialogContent>
      </Dialog>

    </header>
  );
}