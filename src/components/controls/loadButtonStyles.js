import { green } from '@material-ui/core/colors';

const loadButtonStyles = {
  wrapper: {
    // margin: 1,
    position: 'relative',
  },
  buttonSuccess: (status) => ({
    backgroundColor: status && green[500],
    '&:hover': {
      backgroundColor: status && green[700],
    }
  }),
  buttonProgress: {
    color: '#2196F3',
    position: 'absolute',
    top: '20%',
    left: '40%',
    // marginTop: -12,
    // marginLeft: -12,
  },
};

export default loadButtonStyles;
