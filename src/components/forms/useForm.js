import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setFormErrors({});
  };

  return {
    values,
    setValues,
    formErrors,
    setFormErrors,
    handleInputChange,
    resetForm
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
    //   width: '80%',
      margin: theme.spacing(1)
    }
  }
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" noValidate {...other}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any
};
