import React from 'react';
import { Link } from 'react-router-dom';

// Mui imports
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1, 
    },
    container: {
      backgroundColor: 'white',
      color: 'rgba(74,74,74,1)',
      boxShadow: '0 0 4px rgba(0,0,0,.1),'
               + '0 2px 4px rgba(0,0,0,.1);'
    },
    icon: {
      fontSize: '1.8rem',
      marginRight: '5px',
      color: theme.palette.primary.main,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  }),
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    setAuth(false);
  }

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch color="default" checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <StarHalfIcon className={classes.icon}/>
          <Typography variant="h1" className={classes.title}>
            We Know How
          </Typography>
          <Button color="inherit" component={Link} to={"/home"}>Home</Button>
          {!auth && (
            <React.Fragment>
              <Button color="inherit" component={Link} to={"/signin"}>Sign in</Button>
              <Button color="inherit" component={Link} to={"/signup"}>Sign up</Button>
            </React.Fragment>
          )}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={signOut}>Sign out</MenuItem>
              </Menu>
            </div>
          )}  
        </Toolbar>
      </AppBar>
    </div>
  );
}