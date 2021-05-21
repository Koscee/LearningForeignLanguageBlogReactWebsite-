import {
  Box,
  // Card,
  // CardContent,
  // TextField,
  // InputAdornment,
  // SvgIcon
} from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';
import Controls from '../controls/Controls';

const PostListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Controls.Buttons.CreateButton
        href="/app/posts/addpost"
        text="ADD NEW POST"
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <Controls.SearchBar placeholder="Search post" />
      {/* <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search post"
              variant="standard"
            />
          </Box>
        </CardContent>
      </Card> */}
    </Box>
  </Box>
);

export default PostListToolbar;
