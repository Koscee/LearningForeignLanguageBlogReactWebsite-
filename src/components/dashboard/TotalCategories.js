import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import { orange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from 'src/actions/categoryAction';
import CounterCard from './CounterCard';

const TotalCategories = (props) => {
  const { totalCount } = props;

  useEffect(() => {
    props.getCategories();
  }, [totalCount]);

  return (
    <>
      <CounterCard
        name="CATEGORIES"
        totalNumber={`${totalCount}`}
        icon={<CollectionsBookmarkOutlinedIcon />}
        backgroundColor={orange[700]}
      />
    </>
  );
};

TotalCategories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  totalCount: state.category.totalCount
});

export default connect(mapStateToProps, { getCategories })(TotalCategories);
