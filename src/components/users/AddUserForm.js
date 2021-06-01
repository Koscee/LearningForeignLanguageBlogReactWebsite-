import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import getAllRoles from '../../actions/roleAction';
import { registerUser } from '../../actions/securityActions';

import Controls from '../controls/Controls';
import buttonStyles from '../controls/loadButtonStyles';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';

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
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: '',
  gender: genderItems[0].name,
  roleName: '',
  phoneNumber: '',
  avatarImg: '',
  email: ''
};

const AddUserForm = (props) => {
  const { roles, errors } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    values, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    props.getAllRoles();
  }, [getAllRoles]);

  // const handleSetOptions = () => {
  //   setValues({ ...values, roleName: roles[2].roleName });
  // };

  // useEffect(() => {
  //   console.log(roles[0]);
  //   handleSetOptions();
  //   // values.roleName = roles[2].roleName;
  // }, [roles]);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const numberStr = values.phoneNumber;
    values.phoneNumber = numberStr.replace(/-| /gi, ''); // removes - and spaces from d phonenumber
    props.registerUser(values, navigate, setLoading, setSuccess);
    // console.log(values);
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
                name="roleName"
                label="Role"
                value={values.roleName}
                options={roles}
                error={formErrors.roleName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controls.PhoneInput
                value={values.phoneNumber}
                error={formErrors.phoneNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controls.Select
                name="gender"
                label="Gender"
                value={values.gender}
                options={genderItems}
                error={formErrors.gender}
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
              {/* <Controls.Buttons.Button
                text="ADD"
                marginY={6}
                paddingY={1.5}
                fullWidth
                size="large"
                type="submit"
              /> */}
              <Grid container sx={{ ...buttonStyles.wrapper, my: 4 }}>
                <Controls.Buttons.Button
                  sx={{ ...button.root, ...buttonStyles.buttonSuccess(success) }}
                  text="ADD"
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

AddUserForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  getAllRoles: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  roles: state.role.roles,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser, getAllRoles })(AddUserForm);
