import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../Logo';
import Controls from '../controls/Controls';
import customStyles from './LoginRegisterFormStyles';
import { useForm, Form } from './useForm';
import { login, clearErrors } from '../../actions/securityActions';

const useStyles = makeStyles((theme) => (customStyles(theme)));

const initialValues = {
  username: '',
  password: ''
};

const LoginForm = (props) => {
  const { errors, security } = props;
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    values, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    // console.log('componentDidMount');
    props.clearErrors();
  }, []);

  useEffect(() => {
    // console.log('componentWillUpdate');
    setFormErrors(errors);
  }, [errors]);

  useEffect(() => {
    // console.log('useEffect runed');
    if (security.validToken) {
      // console.log('security', security);
      // console.log('UseEffectStoreSecurity', store.getState().security);
      navigate('/home');
    }
  }, [security]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(values);
  };

  return (
    <>
      <Helmet>
        <title>Login | Language Learning Blog</title>
      </Helmet>
      <Grid container direction="column" alignContent="center" sx={{ mx: 4 }}>
        <Grid item className={classes.alignCenter}>
          <RouterLink to="/home">
            <Logo className={classes.logo} />
          </RouterLink>
        </Grid>

        <Container maxWidth="xs" className={classes.container}>
          <div className={`${classes.alignCenter} ${classes.paper}`}>
            <Typography component="h1" variant="h3" color="primary.light">
              LOGIN
            </Typography>
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Controls.Input
                    autoFocus
                    required
                    variant="standard"
                    name="username"
                    id="username"
                    label="Username"
                    autoComplete="username"
                    value={values.username}
                    error={formErrors.username}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Input
                    required
                    variant="standard"
                    name="password"
                    id="password"
                    label="Password"
                    autoComplete="current-password"
                    type="password"
                    value={values.password}
                    error={formErrors.password}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Controls.Buttons.Button
                text="Login"
                marginY={6}
                paddingY={1.5}
                fullWidth
                size="large"
                type="submit"
              />
              <Typography color="textSecondary" variant="body2" align="center">
                Don&apos;t have an account?
                {' '}
                <Link
                  color="tertiary.main"
                  component={RouterLink}
                  to="/user/register"
                  variant="h6"
                >
                  SIGN UP
                </Link>
              </Typography>
            </Form>
          </div>
        </Container>
      </Grid>
    </>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors
});

export default connect(mapStateToProps, { login, clearErrors })(LoginForm);
