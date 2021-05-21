import { red } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CounterCard from './CounterCard';

const TotalLikes = (props) => (
  <>
    <CounterCard
      name="TOTAL LIKES"
      totalNumber="2,000"
      icon={<ThumbUpAltIcon />}
      backgroundColor={red[700]}
      {...props}
    />
  </>
);

export default TotalLikes;
