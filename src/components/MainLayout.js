import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeaderNavBar from './Header';
import SideBar from './SideBar';
import * as Frame from './LayoutStyles';

const MainLayout = ({ security }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  console.log('MainLayoutSecurity', security);

  const { validToken, user } = security;
  let userIsAuthenticated;

  if (validToken && user) {
    userIsAuthenticated = true;
    console.log(' user is Authenticated');
  } else {
    userIsAuthenticated = false;
    console.log(' useris not Authenticated');
  }

  return (
    <Frame.MainLayoutRoot>
      <HeaderNavBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isLoggedIn={userIsAuthenticated}
      />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        isLoggedIn={userIsAuthenticated}
        role={user.roleName}
      />
      <Frame.MainLayoutWrapper>
        <Frame.LayoutContainer>
          <Frame.LayoutContent>
            <Outlet />
          </Frame.LayoutContent>
        </Frame.LayoutContainer>
      </Frame.MainLayoutWrapper>
    </Frame.MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security
});

export default connect(mapStateToProps)(MainLayout);
