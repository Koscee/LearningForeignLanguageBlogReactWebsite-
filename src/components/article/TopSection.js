// import React from 'react';
import {
  Grid, makeStyles,
//   Box
} from '@material-ui/core';
import ContentSection from './ContentSection';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  mainContainer: {
    height: '45vh',
    background: 'linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.8)), url("/static/images/coverImg.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
  },
//   mainItem: {
//     // padding: theme.spacing(6),
//     // textAlign: 'left',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%'
//   }
}));

const PageTopSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} flexDirection="column">
      <Grid item>
        <Grid container className={classes.mainContainer} />
        <ContentSection />
      </Grid>
      {/* <Grid item className={classes.mainItem}>
        <Container maxWidth="md" className={classes.mainItem}>
        </Container>
      </Grid> */}
    </Grid>
  );
};

export default PageTopSection;
