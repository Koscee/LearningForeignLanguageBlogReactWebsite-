import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userAction';

const userListResults = (props) => {
  const { users, searchText } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const onDeleteClick = (id) => {
    props.deleteUser(id);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
                <TableCell align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  (user.email.toLowerCase().includes(searchText.toLowerCase())
                    || user.username.toLowerCase().includes(searchText.toLowerCase())
                    || user.roleName.toLowerCase().includes(searchText.toLowerCase())
                  )
                    && (
                    <TableRow
                      hover
                      key={user.id}
                    >
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Avatar
                            alt={user.firstName}
                            src={user.avatarImg}
                            sx={{ mr: 2 }}
                          />
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {user.fullName}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {user.email}
                      </TableCell>
                      <TableCell>
                        {user.roleName}
                      </TableCell>
                      <TableCell>
                        {moment(user.registered_At).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/app/manage/users/updateUser/${user.id}`}>
                          <IconButton style={{ marginRight: 3 }}>
                            <EditIcon color="secondary" />
                          </IconButton>
                        </Link>

                        <IconButton style={{ marginLeft: 3 }} onClick={() => onDeleteClick(user.id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    )
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

userListResults.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(null, { deleteUser })(userListResults);
