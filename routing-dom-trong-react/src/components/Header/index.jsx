import { Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      textDecoration: 'none',
      color: 'white'
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: '1'
  }
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
}

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton}/>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>  EZ SHOP </Link>
          </Typography>
            <NavLink to='/todos' activeClassName='active-menu' className={classes.link}>
                <Button color="inherit">Todos</Button>
            </NavLink>
            <NavLink to='/albums' className={classes.link}>
                <Button color="inherit">Albums</Button>
            </NavLink>
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign='center'> 
                <Button color="primary" onClick={()=> setMode(MODE.LOGIN)}>
                  Already have an account. Login Here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
               <Login closeDialog={handleClose} />
              <Box textAlign='center'> 
                <Button color="primary" onClick={()=> setMode(MODE.REGISTER)}>
                  Don't have and account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
