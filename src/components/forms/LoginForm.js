import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../Logo';
import Controls from '../controls/Controls';
import customStyles from './LoginRegisterFormStyles';
import { useForm, Form } from './useForm';

const useStyles = makeStyles((theme) => (customStyles(theme)));

const initialValues = {
  username: '',
  password: ''
};

export default function LoginForm() {
  const classes = useStyles();

  const {
    values, errors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Login | Language Learning Blog</title>
      </Helmet>
      <Grid container direction="column" alignContent="center" sx={{ mx: 4 }}>
        <Grid item className={classes.alignCenter}>
          <RouterLink to="/">
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
                    error={errors.username}
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
                    error={errors.password}
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
}
