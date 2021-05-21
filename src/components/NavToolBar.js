import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Hidden,
  List,
  Toolbar
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// import { useState } from 'react';
import Logo from './Logo';
import Controls from './controls/Controls';
import { itemsList } from './NavListItems';
import NavTopMenuItem from './HeaderMenu';

// const items = [
//   {
//     href: '/home',
//     title: 'Home'
//   },
//   {
//     href: '/categories',
//     title: 'Categories',
//     subNav: [
//       {
//         id: 1,
//         title: 'English'
//       },
//       {
//         id: 2,
//         title: 'Chinese'
//       },
//       {
//         id: 3,
//         title: 'Russian'
//       },
//     ]
//   }

// ];

function NavToolBar(props) {
  const { children, isLoggedIn, ...other } = props;

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const showLoginAndSignupBtn = () => (
    <Box>
      <Controls.Buttons.LoginButton
        color="secondary"
        variant="outlined"
        size="small"
        padding={0.4}
        sx={{
          color: 'white',
          mx: 1
        }}
      />
      <Controls.Buttons.SignUpButton
        color="secondary"
        size="small"
        padding={0.5}
        sx={{
          mx: 1
        }}
      />
    </Box>
  );

  return (
    <Toolbar {...other}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgDown>
        <List sx={{ display: 'flex' }}>
          {
          itemsList.mainNav.map((item) => (
            <NavTopMenuItem key={item.title} menuItem={item} />
          ))
        }
        </List>

        {/* displasys button if user is not logged in */}
        {/* {
           !isLoggedIn ? showLoginAndSignupBtn() : ' '
        } */}
        { showLoginAndSignupBtn() }

        {/* use the below code to handle the display of the profile icon when loggedIn */}
        {/* {
          isLoggedIn && (
            <IconButton color="inherit" component={RouterLink} to="/app/account">
              <AccountCircle />
            </IconButton>
          )
        } */}
        {/* <IconButton color="inherit" component={RouterLink} to="/app/account">
          <AccountCircle />
        </IconButton> */}
        {
          itemsList.accountNav.map((item) => (
            <NavTopMenuItem key={item.title} menuItem={item} />
          ))
        }
      </Hidden>
      {children}
    </Toolbar>
  );
}

NavToolBar.propTypes = {
  children: PropTypes.any,
  isLoggedIn: PropTypes.bool
};

export default NavToolBar;
