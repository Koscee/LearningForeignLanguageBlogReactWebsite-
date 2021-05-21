import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActions as MuiCardActions,
  Grid
} from '@material-ui/core';

const CardFooter = (props) => {
  const {
    justifyContent, gridStyle, spacing, children, ...other
  } = props;
  return (
    <MuiCardActions {...other}>
      <Grid
        container
        justifyContent={justifyContent}
        alignItems="center"
        className={gridStyle}
        spacing={spacing}
      >
        {children}
      </Grid>
    </MuiCardActions>
  );
};

CardFooter.propTypes = {
  justifyContent: PropTypes.string.isRequired,
  gridStyle: PropTypes.any,
  spacing: PropTypes.number,
  children: PropTypes.any,
};

export default CardFooter;
