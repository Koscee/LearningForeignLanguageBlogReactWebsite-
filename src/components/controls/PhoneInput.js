import React from 'react';
import PropTypes from 'prop-types';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { TextField, } from '@material-ui/core';

const phoneTextField = {
  outlined: {
    width: '100%',
    border: 0,
    borderRadius: 0
  },
  // standard: {
  //   border: 'none',
  //   width: '100%',
  //   borderBottom: '1px solid grey',
  //   borderRadius: 0
  // },
  button: {
    background: 'rgba(255, 255, 255, 0)',
    // '&:hover': { background: 'rgba(255, 255, 255, 0)' },
    border: 'none',
    padding: 1
  },
  container: {
    margin: 10
  }
};

const convertToPhoneInfoParam = (name, value, input, country, event) => ({
  target: {
    name, // shrtcut for (name: name)
    value, // value: value
    input, // input: input
    country, // country: country
    event, // event: event
  },
});

const CustomInput = React.forwardRef((props, inputRef) => {
  const { value, onChange, ...others } = props;
  return (
    <ReactPhoneInput
      ref={(ref) => { inputRef(ref ? ref.inputElement : null); }}
      inputProps={{
        name: 'phoneNumber',
        id: 'phoneNumber'
      // label: 'Phone Number',
      }}
      inputStyle={phoneTextField.outlined}
      buttonStyle={phoneTextField.button}
      containerStyle={phoneTextField.container}
      countryCodeEditable={false}
      country="cn"
      value={value}
      onChange={(inputValue, country, e, formattedValue) => onChange(convertToPhoneInfoParam(e.target.name, formattedValue, inputValue, country, e))}
        // onChange={(inputValue, country, e, formattedValue) => {
        //   console.log(`value: ${inputValue}`,
        //     `dialCode: ${country.dialCode}`,
        //     `formattedValue: ${formattedValue}`);
        // }}
      {...others}
    />
  );
});

function PhoneInput(props, ref) {
  const {
    value, onChange, error = null, ...others
  } = props;
  return (
    <TextField
      fullWidth
      inputRef={ref}
      value={value}
      onChange={onChange}
      variant="outlined"
      label="Mobile Number"
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: CustomInput,
      }}
      {...(error && { error: true, helperText: error })}
      {...others}
    />
  );
}

export default React.forwardRef(PhoneInput);

PhoneInput.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.any
};
