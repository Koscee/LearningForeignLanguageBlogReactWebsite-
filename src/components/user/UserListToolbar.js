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

const UserListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Controls.Buttons.CreateButton
        href="/app/users/adduser"
        text="ADD NEW USER"
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <Controls.SearchBar placeholder="Search user" />
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
              placeholder="Search user"
              variant="standard"
            />
          </Box>
        </CardContent>
      </Card> */}
    </Box>
  </Box>
);

export default UserListToolbar;
