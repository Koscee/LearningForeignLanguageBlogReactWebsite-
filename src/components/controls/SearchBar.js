import React from 'react';
import PropTypes from 'prop-types';
import MuiSearchBar from 'material-ui-search-bar';

export default function SearchBar({
  placeholder, searchText, setSearchText, ...other
}) {
  // const [searchText, setSearchText] = useState('');
  const handleSearch = (newValue) => {
    console.log(newValue);
    setSearchText(newValue);
  };
  const resetSearchField = () => {
    setSearchText('');
  };

  return (
    <MuiSearchBar
          // name="searchInput"
      value={searchText}
      onChange={handleSearch}
      onRequestSearch={() => console.log('onRequestSearch')}
      onCancelSearch={resetSearchField}
      style={{
        margin: '0 auto',
        maxWidth: '75%'
      }}
      placeholder={placeholder || 'Search'}
      {...other}
    />
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
