import {
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
// import { Search as SearchIcon } from 'react-feather';
import Controls from '../controls/Controls';

const UserListToolbar = ({
  searchText, setSearchText, ...otherProps
}) => (
  <Box {...otherProps}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Controls.Buttons.CreateButton
        href="/app/manage/users/adduser"
        text="ADD NEW USER"
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <Controls.SearchBar
        placeholder="Search user"
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </Box>
  </Box>
);

UserListToolbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default UserListToolbar;
