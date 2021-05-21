import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNavBar from './Header';
import SideBar from './SideBar';
import * as Frame from './LayoutStyles';
import state from './stateConstants';

const MainLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  // const isLoggedIn = true; // later use hooks (useState) or redux to handle change
  // const role = 'superAdmin'; // later use hooks (useState) or redux to handle change
  const { isLoggedIn, role } = state;

  return (
    <Frame.MainLayoutRoot>
      <HeaderNavBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        isLoggedIn={isLoggedIn}
      />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        isLoggedIn={isLoggedIn}
        role={role}
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

export default MainLayout;
