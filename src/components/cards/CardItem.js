import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  // Avatar,
  // Box,
} from '@material-ui/core';
// import CardActionArea from "@material-ui/core/CardActionArea";

// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardStyles from './CardStyles';

const useStyles = makeStyles((theme) => (cardStyles(theme)));

const CardItem = (props) => {
  const {
    title, description, image, imageHeight, href,
    titleTextVariant, contentTextVariant, rootStyles, children, ...other
  } = props;
  const classes = useStyles();
  return (
    <RouterLink to={href} style={{ textDecoration: 'none' }}>
      <MuiCard className={`${classes.root} ${rootStyles}`} {...other}>
        <MuiCardMedia
          component="img"
          alt={title}
          height={imageHeight}
          image={image}
          title={title}
        />
        <MuiCardContent>
          <Typography gutterBottom variant={titleTextVariant} component="h2">
            {title}
          </Typography>
          <span className={classes.description}>
            <Typography
              variant={contentTextVariant}
              color="textSecondary"
              dangerouslySetInnerHTML={{ __html: description.slice(0, 150) }}
            />
            ...
          </span>
        </MuiCardContent>
        {children}
      </MuiCard>
    </RouterLink>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  titleTextVariant: PropTypes.string.isRequired,
  contentTextVariant: PropTypes.string.isRequired,
  rootStyles: PropTypes.any,
  children: PropTypes.any
};

export default CardItem;
