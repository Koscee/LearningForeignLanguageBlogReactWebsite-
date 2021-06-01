import { green } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'src/actions/userAction';
import CounterCard from './CounterCard';

const TotalUsers = (props) => {
  const { totalCount } = props;

  useEffect(() => {
    props.getUsers();
  }, [totalCount]);

  return (
    <>
      <CounterCard
        name="USERS"
        totalNumber={`${totalCount}`}
        icon={<PeopleIcon />}
        backgroundColor={green[700]}
      />
    </>
  );
};

TotalUsers.propTypes = {
  getUsers: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  totalCount: state.user.totalCount
});

export default connect(mapStateToProps, { getUsers })(TotalUsers);
