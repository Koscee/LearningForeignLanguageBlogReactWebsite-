import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import UserListResults from 'src/components/users/UserListResults';
import UserListToolbar from 'src/components/users/UserListToolbar';
// import users from 'src/__mocks__/users';
import { connect } from 'react-redux';
import SnackBarAlert from 'src/components/SnacKBarAlert';
import { getUsers } from '../actions/userAction';

const UserList = (props) => {
  const { alert, users } = props;
  const [searchText, setSearchText] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    props.getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (alert.message !== '') setAlertOpen(true);
  }, [alert]);

  return (
    <>
      <Helmet>
        <title>Users | Language Learning Blog</title>
      </Helmet>
      {
        alert && (
          <SnackBarAlert
            severity={alert.type}
            alertOpen={alertOpen}
            setAlertOpen={setAlertOpen}
            message={alert.message}
          />
        )
        }

      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <UserListToolbar
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Box sx={{ pt: 3 }}>
            <UserListResults users={users} searchText={searchText} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  alert: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  alert: state.alert
});

export default connect(mapStateToProps, { getUsers })(UserList);
