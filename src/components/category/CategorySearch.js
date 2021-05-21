import React from 'react';
import { makeStyles } from '@material-ui/core';
import Controls from 'src/components/controls/Controls';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    width: '100%',
    height: '60px',
    [theme.breakpoints.down('sm')]: { height: '55px' },
    padding: '10px 30px',
    boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${theme.palette.secondary.dark}`,
  }
}));

const CategorySearch = () => {
  const classes = useStyles();
  return (
    <Controls.SearchBar
      placeholder="Search post"
      className={classes.searchBar}
      searchIcon={<SearchIcon color="primary" fontSize="medium" />}
      closeIcon={<CloseIcon color="primary" fontSize="medium" />}
    />
  );
};

export default CategorySearch;
