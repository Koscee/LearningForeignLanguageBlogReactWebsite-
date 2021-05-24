import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Typography, Grid, Box,
  Container
} from '@material-ui/core';
import dateFormat from 'dateformat';
import chatStyles from './Chat';

const AuthorInfo = (props) => {
  const {
    authorName, authorProfilePic, isTitle, isComment, comment, publishedDate
  } = props;

  return (
    <Grid container alignItems={isTitle ? 'center' : 'flex-start'} sx={{ flexWrap: 'nowrap' }}>
      <Grid item>
        <Avatar
          alt={authorName}
          src={authorProfilePic}
          sx={{
            width: isComment ? 50 : 34,
            height: isComment ? 50 : 34,
            marginRight: 0.5,
            border: '1px solid white'
          }}
        />
      </Grid>
      <Grid item>
        {
        isTitle && (
        <Typography
          gutterBottom
          align="left"
          variant="caption"
          color="textDefault"
          component="p"
        >
          {`${authorName} | ${dateFormat(publishedDate, 'mmm dS, yyyy')}`}
        </Typography>
        )
      }
        {
        isComment && (
          <Box>
            <Typography
              gutterBottom
              align="left"
              variant="subtitle2"
              color="tertiary.main"
              component="p"
            >
              {`${authorName}`}
            </Typography>
            <Container sx={chatStyles.chat}>
              <Typography
                align="left"
                variant="h6"
                color="textPrimary"
                component="p"
              >
                {comment}
              </Typography>
            </Container>
          </Box>
        )
      }
      </Grid>
    </Grid>
  );
};
AuthorInfo.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorProfilePic: PropTypes.string.isRequired,
  isTitle: PropTypes.bool,
  isComment: PropTypes.bool,
  comment: PropTypes.string,
  publishedDate: PropTypes.string, // later check the type bec u will use date provided from the back end
};

export default AuthorInfo;
