/* eslint-disable camelcase */
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
// import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import routes from 'src/routes';
import jwt_decode from 'jwt-decode';
import store from './store';
import setJWTToken from './securityUtils/setJWTToken';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/securityActions';

const { jwtToken } = localStorage;

// decodes the token in the local storage which allows the App to know login users
if (jwtToken) {
  setJWTToken(jwtToken);
  const decodedJwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodedJwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decodedJwtToken.exp < currentTime) {
    // handle logout
    store.dispatch(logout());
    // logout();
    // redirect to the home page
    window.location.href = '/user/login';
  }
}

const App = () => {
  const { validToken, user } = useSelector((state) => state.security);
  const routing = useRoutes(routes(validToken, user));

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      {routing}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
