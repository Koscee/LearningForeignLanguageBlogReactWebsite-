/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Button as MuiButton, makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({

//   label: {
//     textTransform: 'none'
//   }
}));

const url = {
  login: '/user/login',
  register: '/user/register'
};

export function Button(props) {
  const {
    text, size, color, variant, width, marginY, padding, paddingY, onClick, ...other
  } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'medium'}
      color={color || 'secondary'}
      onClick={onClick}
      sx={{
        width: width && width,
        my: marginY || 1,
        p: padding || 1,
        py: paddingY
      }}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}

export const CreateButton = (props) => {
  const {
    text, href, color, variant, width, marginY, marginX, paddingY, ...other
  } = props;
  return (
    <Button
      href={href}
      color={color}
      // component="a"
      variant={variant}
      width={width}
      marginY={marginY}
      paddingY={paddingY}
      text={text}
      {...other}
    />
  );
};

export const LoginButton = ({ ...other }) => (
  <CreateButton
    href={url.login}
    text="Login"
    {...other}
  />
);

export const SignUpButton = ({ ...other }) => (
  <CreateButton
    href={url.register}
    text="Sign up"
    {...other}
  />
);
