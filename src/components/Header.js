import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import "./../styles/Header.css";

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
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <React.Fragment>
        <div className='top'>
          <div className='topTitle'>
            반디봇
          </div>
          <div onClick={() => { history.push('/home') }}>
            <button className='topBtn1' arial-label="Home">
              처음으로</button>
          </div>
          <button className='topBtn2' onClick={handleClickOpen}>
            이용방법</button>
        </div>

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            반디봇 사용설명서
          </DialogTitle>
          <DialogContent dividers>
            <ui>
              <li>아바타를 선택해 주시면 반디봇과 대화하실 수 있습니다.</li>
              <li>반디봇에게 질문하신 정책과 유사한 다른 정책도 확인하세요.</li>
              <li>처음으로 메뉴를 누르면 시작화면으로 돌아갑니다.</li>
            </ui>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </header>
  );
}

