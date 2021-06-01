// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const SecuredRoute = ({ component: Component, security, ...otherProps }) => (
//   <Route
//     {...otherProps}
//     render={
//         (props) => (security.validToken === true
//           ? (<Component {...props} />)
//           : (<Redirect to="/user/login" />))
//       }
//   />
// );

// SecuredRoute.propTypes = {
//   security: PropTypes.object.isRequired,
//   component: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => ({
//   security: state.security
// });

// export default connect(mapStateToProps)(SecuredRoute);
