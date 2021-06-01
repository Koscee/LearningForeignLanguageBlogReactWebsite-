import { red } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLikes } from 'src/actions/likeAction';
import CounterCard from './CounterCard';

const TotalLikes = (props) => {
  const { totalCount } = props;

  useEffect(() => {
    (async () => {
      await props.getLikes();
    })();
  }, [totalCount]);

  return (
    <>
      <CounterCard
        name="TOTAL LIKES"
        totalNumber={`${totalCount}`}
        icon={<ThumbUpAltIcon />}
        backgroundColor={red[700]}
      />
    </>
  );
};

TotalLikes.propTypes = {
  getLikes: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  totalCount: state.like.totalCount
});

export default connect(mapStateToProps, { getLikes })(TotalLikes);
