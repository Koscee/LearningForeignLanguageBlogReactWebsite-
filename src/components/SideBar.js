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

import { connect } from 'react-redux';
import { getCategories } from 'src/actions/categoryAction';
import Controls from './controls/Controls';
import { itemsList } from './NavListItems';
import SideBarMenuItem from './SideBarListNav';
import categoryNavList from './categoryNavList';
// import Controls from './controls/Controls';

const SideBar = (props) => {
  const {
    onMobileClose, openMobile, isLoggedIn, role, user, categories, type, children
  } = props;
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  useEffect(() => {
    (async () => {
      await props.getCategories();
      categoryNavList[0].subNav = categories;
    })();
  }, [categories.length]);

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
                alt={user.firstName}
                src={user.avatarImg}
                sx={{
                  cursor: 'pointer',
                  width: 64,
                  height: 64,
                  mb: 1
                }}
                to="/app/account"
              />
              <Typography color="textPrimary" variant="h5">
                {user.fullName}
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                style={{ fontSize: '0.6rem' }}
              >
                {user.roleName}
              </Typography>
            </Box>
            <Divider />
          </>
        )
      }

      <Box sx={{ p: 2 }}>
        <List>
          {displayNavItem(itemsList.mainNav)}
          {/* {console.log(categoryNavList)} */}
          {displayNavItem(categoryNavList)}
          {
              isLoggedIn && displayNavItem([
                ...role !== 'USER' ? itemsList.userNav.admin : [],
                ...role === 'SUPER_ADMIN' ? itemsList.userNav.superAdmin : [],
                ...itemsList.userNav.user
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
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

SideBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

const mapStateToProps = (state) => ({
  user: state.security.user,
  categories: state.category.categories
});

export default connect(mapStateToProps, { getCategories })(SideBar);
