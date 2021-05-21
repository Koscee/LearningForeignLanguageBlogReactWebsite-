import { green } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import CounterCard from './CounterCard';

const TotalUsers = (props) => (
  <>
    <CounterCard
      name="USERS"
      totalNumber="1,600"
      icon={<PeopleIcon />}
      backgroundColor={green[700]}
      {...props}
    />
  </>
);

export default TotalUsers;
