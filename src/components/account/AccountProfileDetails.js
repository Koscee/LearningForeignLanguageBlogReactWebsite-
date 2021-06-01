import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid, makeStyles,
} from '@material-ui/core';

import { connect } from 'react-redux';

import buttonStyles from '../controls/loadButtonStyles';
import Controls from '../controls/Controls';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import ImageUploadButton from '../controls/ImgUploadBtn';
import { getUser, updateUser } from '../../actions/userAction';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';

const button = {
  root: {
    padding: '13px 0',
    boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)',
    //   background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
};

const genderItems = [
  { id: 'male', name: 'Male' },
  { id: 'female', name: 'Female' },
];
const initialValues = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  gender: genderItems[0].name,
  phoneNumber: '',
  avatarImg: '',
  email: ''
};

const AccountProfileDetails = (props) => {
  const {
    user, role, userId, errors
  } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();

  const {
    values, setValues, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  useEffect(() => {
    // values.id = userId;
    props.getUser(userId);
  }, [userId]);

  useEffect(() => {
    setValues({ ...values, ...user });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const numberStr = values.phoneNumber;
    values.phoneNumber = numberStr.replace(/-| /gi, '');
    console.log(values.phoneNumber);
    const updateRequest = {
      id: values.id,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
      roleName: values.roleName,
      avatarImg: values.avatarImg,
      email: values.email
    };
    props.updateUser(userId, role, updateRequest, setLoading, setSuccess);
    // console.log(updateRequest);
  };

  const ProfilePic = () => (
    <Badge badgeContent={<ImageUploadButton name="avatarImg" userId={userId} onChange={handleInputChange} />} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Avatar
        alt={values.username}
        src={values.avatarImg}
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
              value={`${values.id}`}
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
              <Controls.Select
                required
                disabled
                name="gender"
                label="Gender"
                value={values.gender}
                options={genderItems}
                onChange={handleInputChange}
                error={formErrors.gender}
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
                error={formErrors.phoneNumber}
              />
            </Grid>
            {/* <Grid item xs={12}>
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
            </Grid> */}

            <Grid container item xs={12}>
              <Grid container sx={{ ...buttonStyles.wrapper, my: 4 }}>
                <Controls.Buttons.Button
                  sx={{ ...button.root, ...buttonStyles.buttonSuccess(success) }}
                  text="UPDATE"
                  marginY={6}
                  paddingY={1.5}
                  fullWidth
                  size="large"
                  type="submit"
                  disabled={loading}
                />
                {loading && <CircularProgress size={25} sx={buttonStyles.buttonProgress} />}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Form>
  );
};

AccountProfileDetails.propTypes = {
  getUser: PropTypes.func.isRequired, // gets a single post
  updateUser: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  userId: state.security.user.id,
  role: state.security.user.roleName,
  user: state.user.user,
  errors: state.errors
});

export default connect(mapStateToProps, { getUser, updateUser })(AccountProfileDetails);
