import { Container, Grid, makeStyles } from '@material-ui/core';

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../controls/SearchBar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 250,
    background: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("/static/images/coverImg.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: theme.palette.common.white
  },
  mainItem: {
    // padding: theme.spacing(6),
    // textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  searchBar: {
    width: '100%',
    height: '60px',
    [theme.breakpoints.down('sm')]: { height: '55px' },
    borderRadius: '30px',
    padding: '10px 30px',
    boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.25)',
    background: theme.palette.customWhite.main,
    border: '1px solid #E7E7E7',
  }
}));

const HomeSearchSection = ({ searchText, setSearchText }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem}>
        <Container maxWidth="md" className={classes.mainItem}>
          <SearchBar
            className={classes.searchBar}
            placeholder="Type here to search"
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

HomeSearchSection.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default HomeSearchSection;
