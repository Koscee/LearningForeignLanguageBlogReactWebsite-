import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { experimentalStyled } from '@material-ui/core';
import HeaderNavBar from './Header';
// import DashboardSidebar from './DashboardSidebar';
import SideBar from './SideBar';
import * as Frame from './LayoutStyles';
import state from './stateConstants';

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  // const isLoggedIn = true; // later use hooks (useState) or redux to handle change
  // const role = 'subAdmin';
  const { isLoggedIn, role } = state;

  return (
    <Frame.DashboardLayoutRoot>
      <HeaderNavBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isLoggedIn={isLoggedIn}
      />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        isLoggedIn={isLoggedIn}
        role={role}
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

export default DashboardLayout;
