import {
  Box,
} from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';
import PropTypes from 'prop-types';
import Controls from '../controls/Controls';

const CategoryListToolbar = ({ searchText, setSearchText, ...otherProps }) => (
  <Box {...otherProps}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Controls.Buttons.CreateButton
        href="/app/manage/categories/addCategory"
        text="ADD NEW CATEGORY"
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <Controls.SearchBar
        placeholder="Search Category"
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </Box>
  </Box>
);

CategoryListToolbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default CategoryListToolbar;
