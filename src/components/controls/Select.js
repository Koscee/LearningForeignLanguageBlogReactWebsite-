import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText
} from '@material-ui/core';

export default function Select(props) {
  const {
    name, variant, label, value, error = null, onChange, options
  } = props;

  return (
    <FormControl
      variant={variant || 'outlined'}
      {...(error && { error: true })}
      sx={{ width: '100%' }}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {/* <MenuItem value="">None</MenuItem> */}
        {
            options.map(
              (item) => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
            )
        }
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.array
};
