/* eslint react/prop-types: 0 */
import {
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
// import { Search as SearchIcon } from 'react-feather';
import Controls from '../controls/Controls';

const PostListToolbar = ({
  searchText, setSearchText, showAddButton, ...other
}) => (
  <Box {...other}>
    {
      showAddButton && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Controls.Buttons.CreateButton
            href="/app/admin/posts/addPost"
            text="ADD NEW POST"
          />
        </Box>

      )
    }
    <Box sx={{ mt: 3 }}>
      <Controls.SearchBar
        placeholder="Search post"
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </Box>
  </Box>
);

PostListToolbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default PostListToolbar;
