// import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid, makeStyles, Typography,
} from '@material-ui/core';

import Controls from '../controls/Controls';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];
const roles = [
  { id: 'user', title: 'USER' },
  { id: 'subAdmin', title: 'SUBADMIN' },
  { id: 'superAdmin', title: 'SUPERADMIN' },
];
const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  gender: genderItems[0].title,
  role: roles[0].title,
  password: '',
  confirmPassword: ''
};

const AddUserForm = () => {
  const classes = useStyles();
  const {
    values, formErrors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Form className={classes.form} onSubmit={handleSubmit} sx={{ px: 4, }}>
      <Card sx={{
        px: 2, boxShadow: `${shadow}`, position: 'relative', overflow: 'inherit'
      }}
      >
        <Grid container justifyContent="center" sx={{ py: 5, }}>
          <Typography component="h1" variant="h3" color="primary.light">
            CREATE&nbsp;NEW&nbsp;USER
          </Typography>
        </Grid>
        <CardContent>
          <Grid
            container
            spacing={4}
          >
            <Grid item xs={12} md={6}>
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

            <Grid item xs={12} md={6}>
              <Controls.Input
                required
                name="lastName"
                id="lastName"
                label="Last Name"
                autoComplete="lname"
                error={formErrors.lastName}
                value={values.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
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

            <Grid item xs={12} md={6}>
              <Controls.Select
                name="role"
                label="Role"
                value={values.role}
                options={roles}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controls.PhoneInput
                value={values.phoneNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
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
                name="email"
                id="email"
                label="Email Address"
                autoComplete="email"
                error={formErrors.email}
                value={values.email}
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

            <Grid container item xs={12}>
              <Controls.Buttons.Button
                text="ADD"
                marginY={6}
                paddingY={1.5}
                fullWidth
                size="large"
                type="submit"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Form>
  );
};

export default AddUserForm;
