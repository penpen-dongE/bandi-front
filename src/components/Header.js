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

import { grey } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link, useHistory } from 'react-router-dom';


//app bar css
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  iconHover: {
    '&:hover': {
      color: grey[100],
    },
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(-1),

  },
  button: {
    background: '#f9fbe7'
  },

  btnColor: {
    color: theme.palette.grey[100],
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
    color: theme.palette.grey[100],
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
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const HomeIcon = function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }



  return (
    <header className={classes.root}>

      <AppBar position="static">
        <Toolbar>

          <div onClick={() => { history.push('/home') }}>
            <IconButton className={classes.btnColor} aria-label="Home" >
              <HomeIcon fontSize="large" />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            <h3>BandiBot</h3>
          </Typography>
          <Button className={classes.button} onClick={handleClickOpen}>사용설명서</Button>
        </Toolbar>
      </AppBar >

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          반디봇 사용설명서
        </DialogTitle>
        <DialogContent dividers>
          닉네임을 선택해주시고 해당되는 생애주기 혹은 한부모가족 형태를 선택하시면 반디봇과 대화하실 수 있습니다.
        </DialogContent>
      </Dialog>
    </header >
  );
}


  //1128