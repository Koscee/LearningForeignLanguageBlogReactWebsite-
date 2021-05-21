import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Grid } from '@material-ui/core';

const InfoAvatar = (props) => {
  const {
    authorName, authorProfilePic, publishedDate
  } = props;

  return (
    <>
      <Grid item>
        <Avatar
          alt={authorName}
          src={authorProfilePic}
          sx={{ width: 35, height: 35 }}
        />
      </Grid>
      <Grid item>
        <Typography
          align="left"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          {authorName}
        </Typography>
        <Typography
          align="left"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          {publishedDate}
        </Typography>
      </Grid>
    </>
  );
};
InfoAvatar.propTypes = {
  authorName: PropTypes.string,
  authorProfilePic: PropTypes.string,
  publishedDate: PropTypes.string, // later check the type bec u will use date provided from the back end
};

export default InfoAvatar;
