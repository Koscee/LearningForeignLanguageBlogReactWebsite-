import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import { orange } from '@material-ui/core/colors';
import CounterCard from './CounterCard';

const TotalCategories = (props) => (
  <>
    <CounterCard
      name="CATEGORIES"
      totalNumber="248"
      icon={<CollectionsBookmarkOutlinedIcon />}
      backgroundColor={orange[700]}
      {...props}
    />
  </>
);

export default TotalCategories;
