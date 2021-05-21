import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.tertiary.main})`,
    minHeight: '100vh',
    overflowY: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6, 1, 6)
  }

}));

export default function BackgroundWrapper({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {children}
    </Box>
  );
}

BackgroundWrapper.propTypes = {
  children: PropTypes.any,
};
