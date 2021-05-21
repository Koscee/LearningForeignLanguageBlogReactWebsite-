// import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Hidden, IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavToolBar from './NavToolBar';

// // import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// // import InputIcon from '@material-ui/icons/Input';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// import Logo from './Logo';

const HeaderNavBar = ({ onMobileNavOpen, isLoggedIn, ...rest },) => (
  <AppBar
    elevation={0}
    {...rest}
  >
    <NavToolBar isLoggedIn={isLoggedIn}>
      <Hidden lgUp>
        <IconButton
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </NavToolBar>

  </AppBar>
);

HeaderNavBar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

export default HeaderNavBar;
