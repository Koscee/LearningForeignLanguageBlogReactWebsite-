import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const {
    id, name, variant, label, value, error = null, onChange, ...others
  } = props;
  return (
    <TextField
      fullWidth
      variant={variant || 'outlined'}
      label={label}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...others}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
