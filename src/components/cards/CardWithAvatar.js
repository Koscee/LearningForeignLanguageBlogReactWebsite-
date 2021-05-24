import React from 'react';
import PropTypes from 'prop-types';
// import { Typography, Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'dateformat';
import CardItem from './CardItem';
import CardFooter from './CardFooter';
import cardStyles from './CardStyles';
import InfoAvatar from '../InfoAvatar';
// import { Button } from '../controls/Button';

const useStyles = makeStyles((theme) => (cardStyles(theme)));

const CardWithAvatar = (props) => {
  const {
    title, description, image, imageHeight, href, authorName, authorProfilePic, publishedDate, ...other
  } = props;

  const classes = useStyles();

  return (
    <CardItem
      rootStyles={classes.cardWithAvatar}
      variant="outlined"
      title={title}
      description={description}
      image={image}
      imageHeight={imageHeight}
      href={href}
      titleTextVariant="h4"
      contentTextVariant="body2"
      {...other}
    >
      <CardFooter
        justifyContent="flex-start"
        spacing={1}
      >
        <InfoAvatar
          authorName={authorName}
          authorProfilePic={authorProfilePic}
          publishedDate={dateFormat(publishedDate, 'mmm dS, yyyy')}
        />
        {/* <Grid item>
          <Avatar
            alt=
            src=
          />
        </Grid>
        <Grid item>
          <Typography
            align="left"
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {authorName}
          </Typography>
          <Typography
            align="left"
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {publishedDate}
          </Typography>
        </Grid> */}
      </CardFooter>
    </CardItem>
  );
};

CardWithAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  authorProfilePic: PropTypes.string,
  publishedDate: PropTypes.string, // later check the type bec u will use date provided from the back end
};

export default CardWithAvatar;
