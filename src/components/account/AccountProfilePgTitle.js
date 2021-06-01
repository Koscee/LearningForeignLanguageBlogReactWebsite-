import {
  Box,
  Typography,
} from '@material-ui/core';

const AccountProfilePageTitle = () => (
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Typography component="h1" variant="h2" color="primary">
      PROFILE &nbsp; UPDATE
    </Typography>
  </Box>
);

export default AccountProfilePageTitle;
