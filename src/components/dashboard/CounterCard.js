import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';

const CountCard = (props) => {
  const {
    name, totalNumber, icon, backgroundColor, ...rest
  } = props;
  return (
    <Card
      sx={{ height: '100%' }}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'flex-start' }}
        >
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: { backgroundColor },
                height: 56,
                width: 56
              }}
            >
              {icon}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h1"
            >
              {totalNumber}
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {name}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CountCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalNumber: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  backgroundColor: PropTypes.any.isRequired
};

export default CountCard;
