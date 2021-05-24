import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../Logo';
import Controls from '../controls/Controls';
import customStyles from './LoginRegisterFormStyles';
import { useForm, Form } from './useForm';

const useStyles = makeStyles((theme) => (customStyles(theme)));

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];
const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  gender: genderItems[0].title,
  password: '',
  confirmPassword: ''
};

export default function RegisterForm() {
  const classes = useStyles();
  const {
    values, formErrors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <Helmet>
        <title>Register | Language Learning Blog</title>
      </Helmet>
      <Grid container direction="column" alignContent="center" sx={{ mx: 4 }}>
        <Grid item className={classes.alignCenter}>
          <RouterLink to="/">
            <Logo className={classes.logo} />
          </RouterLink>
        </Grid>

        <Container maxWidth="md" className={classes.container}>
          <div className={`${classes.alignCenter} ${classes.paper}`}>
            <Typography component="h1" variant="h3" color="primary.light">
              CREATE &nbsp; ACCOUNT
            </Typography>
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={4} sx={{ py: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    autoFocus
                    required
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    autoComplete="fname"
                    error={formErrors.firstName}
                    value={values.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    // required
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    autoComplete="lname"
                    error={formErrors.lastName}
                    value={values.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    required
                    name="username"
                    id="username"
                    label="Username"
                    autoComplete="uname"
                    error={formErrors.username}
                    value={values.username}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    required
                    name="email"
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    error={formErrors.email}
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.PhoneInput
                    value={values.phoneNumber}
                    error={formErrors.phoneNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Select
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    options={genderItems}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Input
                    required
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    error={formErrors.password}
                    value={values.password}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Input
                    required
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    error={formErrors.confirmPassword}
                    value={values.confirmPassword}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Controls.Buttons.Button
                text="Sign up"
                marginY={6}
                paddingY={1.5}
                fullWidth
                size="large"
                type="submit"
              />
              <Typography color="textSecondary" variant="body2" align="center">
                Already have an account?
                {' '}
                <Link
                  color="tertiary.main"
                  component={RouterLink}
                  to="/user/login"
                  variant="h6"
                >
                  LOGIN
                </Link>
              </Typography>
            </Form>
          </div>
        </Container>
      </Grid>
    </>
  );
}
