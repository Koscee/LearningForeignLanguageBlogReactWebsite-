// import { useState } from 'react';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid, makeStyles,
} from '@material-ui/core';

import Controls from '../controls/Controls';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import ImageUploadButton from '../controls/ImgUploadBtn';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';

const user = {
  avatar: '/static/images/avatars/avatar_1.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];
const initialValues = {
  userId: '011',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  gender: genderItems[0].title,
  password: '',
  confirmPassword: ''
};

const AccountProfileDetails = () => {
  const classes = useStyles();
  const {
    values, formErrors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ProfilePic = () => (
    <Badge badgeContent={<ImageUploadButton />} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Avatar
        src={user.avatar}
        sx={{
          height: 90,
          width: 90,
        }}
      />
    </Badge>
  );

  return (
    <Form className={classes.form} onSubmit={handleSubmit} sx={{ px: 4, }}>
      <Card sx={{
        px: 2, pt: 10, boxShadow: `${shadow}`, position: 'relative', overflow: 'inherit'
      }}
      >
        <Container
          sx={{
            position: 'absolute',
            left: 0,
            top: -40,
            width: '100%',
            display: 'flex',
            placeContent: 'center',
            margin: 'auto'
          }}
        >
          <ProfilePic />
        </Container>

        <CardHeader />
        <CardContent>
          <Grid sx={{ display: 'none' }}>
            <Controls.Input
              required
              disabled
              name="userId"
              id="userId"
              label="userId"
              type="hidden"
              value={values.userId}
            />
          </Grid>
          <Grid
            container
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <Controls.Input
                autoFocus
                required
                disabled
                variant="filled"
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
                disabled
                variant="filled"
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
                text="Submit"
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

export default AccountProfileDetails;
