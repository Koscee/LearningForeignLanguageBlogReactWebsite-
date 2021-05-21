import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';
import CardItem from './CardItem';
import CardFooter from './CardFooter';
import cardStyles from './CardStyles';
// import { Button } from '../controls/Button';

const useStyles = makeStyles((theme) => (cardStyles(theme)));

const SimpleCard = (props) => {
  const {
    title, description, image, imageHeight, href, ...other
  } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => { navigate(href); };
  return (
    <CardItem
      rootStyles={classes.simpleCard}
      title={title}
      description={description}
      image={image}
      imageHeight={imageHeight}
      href={href}
      titleTextVariant="h3"
      contentTextVariant="body1"
      {...other}
    >
      <CardFooter
        justifyContent="space-between"
        gridStyle={classes.cardActionGrid}
      >
        <Box className={classes.postTime}>
          <Typography variant="subtitle2" color="textSecondary" component="p" fontSize="0.78rem">
            Posted on Febuary 6th 2021
          </Typography>
        </Box>
        <Box className={classes.button}>
          {/* button for mobile users */}
          <Button
            onClick={handleClick}
            size="small"
            color="secondary"
            endIcon={<ArrowRightIcon />}
          >
            Read More
          </Button>
        </Box>
      </CardFooter>
    </CardItem>
  );
};

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired
};

export default SimpleCard;
