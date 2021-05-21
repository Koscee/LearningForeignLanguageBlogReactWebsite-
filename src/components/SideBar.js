import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@material-ui/core';

import Controls from './controls/Controls';
import { user, itemsList } from './NavListItems';
import SideBarMenuItem from './SideBarListNav';
// import Controls from './controls/Controls';

// const role = 'superAdmin';

const SideBar = ({
  onMobileClose, openMobile, isLoggedIn, role, type
}, props) => {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const displayNavItem = (arry) => (
    arry.map((item) => (
      <SideBarMenuItem
        key={item.title}
        menuItem={item}
      />
    ))
  );

  const showLoginAndSignupBtn = () => (
    <Box>
      <Controls.Buttons.LoginButton
        variant="outlined"
        width="100%"
        marginY={2}
      />
      <Controls.Buttons.SignUpButton
        width="100%"
        marginY={2}
      />
    </Box>
  );

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {
        isLoggedIn && (
          <>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                p: 2
              }}
            >
              <Avatar
                component={RouterLink}
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  width: 64,
                  height: 64,
                  mb: 1
                }}
                to="/app/account"
              />
              <Typography color="textPrimary" variant="h5">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {user.jobTitle}
              </Typography>
            </Box>
            <Divider />
          </>
        )
      }

      <Box sx={{ p: 2 }}>
        <List>
          {displayNavItem(itemsList.mainNav)}
          {
              isLoggedIn && displayNavItem([
                ...role !== 'user' ? itemsList.loginNav.admin : [],
                ...role === 'superAdmin' ? itemsList.loginNav.superAdmin : [],
                ...itemsList.loginNav.user
              ])
          }
        </List>

        {/* displasys button if page which isnt a dashboard and the user is not logged in */}
        {
            type !== 'dashboard'
            && (!isLoggedIn ? showLoginAndSignupBtn() : ' ')
        }

      </Box>
      {/* <Box sx={{ flexGrow: 1 }} /> */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      {
          type === 'dashboard' && (
            <Hidden lgDown>
              <Drawer
                anchor="left"
                open
                variant="persistent"
                PaperProps={{
                  sx: {
                    width: 256,
                    top: 64,
                    height: 'calc(100% - 64px)'
                  }
                }}
              >
                {content}
              </Drawer>
            </Hidden>
          )
      }

      {children}
    </>
  );
};

SideBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.string,
  role: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

SideBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default SideBar;
