import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderNavBar from './Header';
// import DashboardSidebar from './DashboardSidebar';
import SideBar from './SideBar';
import * as Frame from './LayoutStyles';
// import state from './stateConstants';

const DashboardLayout = (props) => {
  const { security } = props;
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  // const isLoggedIn = true; // later use hooks (useState) or redux to handle change
  // const role = 'subAdmin';
  // const { isLoggedIn, role } = state;

  console.log('DashboardLayoutSecurity', security);

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
    <Frame.DashboardLayoutRoot>
      <HeaderNavBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isLoggedIn={userIsAuthenticated}
      />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        isLoggedIn={userIsAuthenticated}
        role={user.roleName}
        type="dashboard"
      />
      {/* <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        isLoggedIn={isLoggedIn}
        role={role}
      /> */}
      <Frame.DashboardLayoutWrapper>
        <Frame.LayoutContainer>
          <Frame.LayoutContent>
            <Outlet />
          </Frame.LayoutContent>
        </Frame.LayoutContainer>
      </Frame.DashboardLayoutWrapper>
    </Frame.DashboardLayoutRoot>
  );
};

DashboardLayout.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  security: state.security
});

export default connect(mapStateToProps)(DashboardLayout);
