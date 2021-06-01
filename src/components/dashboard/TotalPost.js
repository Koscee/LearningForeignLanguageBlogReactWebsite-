import { indigo } from '@material-ui/core/colors';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllFilteredPosts } from 'src/actions/postActions';
import CounterCard from './CounterCard';

const TotalPosts = (props) => {
  const { totalCount } = props;

  useEffect(() => {
    props.getAllFilteredPosts();
  }, [totalCount]);

  return (
    <>
      <CounterCard
        name="TOTAL POSTS"
        totalNumber={`${totalCount}`}
        icon={<BorderColorIcon />}
        backgroundColor={indigo[700]}
      />
    </>
  );
};

TotalPosts.propTypes = {
  getAllFilteredPosts: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  totalCount: state.post.totalCount
});

export default connect(mapStateToProps, { getAllFilteredPosts })(TotalPosts);
