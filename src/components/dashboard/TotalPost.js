import { indigo } from '@material-ui/core/colors';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CounterCard from './CounterCard';

const TasksPosts = (props) => (
  <>
    <CounterCard
      name="TOTAL POSTS"
      totalNumber="755"
      icon={<BorderColorIcon />}
      backgroundColor={indigo[700]}
      {...props}
    />
  </>
);

export default TasksPosts;
