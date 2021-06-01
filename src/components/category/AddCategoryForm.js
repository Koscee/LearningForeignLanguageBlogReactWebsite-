import React, { useEffect } from 'react';
// import { useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import Controls from '../controls/Controls';
import buttonStyles from '../controls/loadButtonStyles';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import { createCategory } from '../../actions/categoryAction';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';
const button = {
  root: {
    border: 0,
    padding: '0 30px',
    height: 40,
    boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)',
    //   background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  }
};

const initialValues = {
  name: ''
};

const AddCategoryForm = (props) => {
  const { errors } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const {
    values, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    props.createCategory(values, navigate, setLoading, setSuccess);
    // console.log('history', navigate);
    // console.log(values);
  };

  return (
    <Form className={classes.form} onSubmit={handleSubmit} sx={{ px: 4, }}>
      <Card sx={{
        px: 2, pb: 2, boxShadow: `${shadow}`
      }}
      >
        <Grid container justifyContent="center" sx={{ py: 5, }}>
          <Typography component="h1" variant="h3" color="primary.light">
            CREATE&nbsp;NEW&nbsp;CATEGORY
          </Typography>
        </Grid>
        <CardContent>
          <Grid
            container
            spacing={5}
          >
            <Grid item xs={12}>
              <Controls.Input
                autoFocus
                required
                name="name"
                id="categoryName"
                label="Category Name"
                error={formErrors.name}
                value={values.name}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="flex-end">
              <Box sx={buttonStyles.wrapper}>
                <Controls.Buttons.Button
                  sx={{ ...button.root, ...buttonStyles.buttonSuccess(success) }}
                  text="ADD"
                // size="large"
                  type="submit"
                  disabled={loading}
                />
                {loading && <CircularProgress size={25} sx={buttonStyles.buttonProgress} />}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Form>
  );
};

AddCategoryForm.propTypes = {
  createCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createCategory })(AddCategoryForm);
