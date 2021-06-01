import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { CardActions, Divider, makeStyles } from '@material-ui/core';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    boxShadow: '-1px 2px 5px 1px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      boxShadow: '-1px 2px 20px 1px rgba(0, 0, 0, 0.25)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: 0,
    paddingTop: 0
  },
  cover: {
    // minWidth: '180px',
    maxWidth: '195px',
    height: '210px',
    [theme.breakpoints.up('lg')]: {
      minHeight: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      height: '150px',
    },
    boxShadow: '-1px 1px 1px 1px rgba(0, 0, 0, 0.05)'
  },
  description: {
    '& .MuiTypography-root, & .MuiTypography-root > p': {
      display: 'inline',
    },
    '& .MuiTypography-root > h1': {
      fontSize: '1rem',
      fontWeight: 'normal'
    }
  },
  alignment: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '8px 10px 8px 16px'
  },
  icon: {
    padding: 8
  }
}));

const LinkIconBtn = ({
  href, label, icon, ...other
}) => (
  <Link to={href} {...other}>
    <IconButton aria-label={label} className={useStyles().icon}>
      {icon}
    </IconButton>
  </Link>
);

const PostCard = (props) => {
  const classes = useStyles();
  const { post } = props;

  const onDeleteClick = (id) => {
    props.deletePost(id);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={post.coverImage}
        title={post.title}
      />
      <div className={classes.details}>
        <div className={classes.alignment}>
          <Typography color="tertiary.main" gutterBottom component="p" variant="subtitle2">
            {post.categoryName}
          </Typography>
        </div>
        <CardContent className={classes.content}>
          <Typography gutterBottom component="h5" variant="h3" fontSize="large" sx={{ mb: 1 }}>
            {post.title}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            { `${post.description.slice(0, 130)}...`}
          </Typography>
        </CardContent>
        <Typography variant="caption" color="textSecondary" className={classes.alignment}>
          {`posted on: ${dateFormat(post.createdAt, 'mmm dS, yyyy')}`}
        </Typography>
        <Divider />
        <CardActions className={classes.alignment}>
          <LinkIconBtn
            href={`/article/${post.id}`}
            label="view"
            icon={<OpenInNewIcon fontSize="small" />}
          />
          <LinkIconBtn
            href={`/app/admin/posts/updatePost/${post.id}`}
            label="update"
            icon={<EditIcon color="secondary" fontSize="small" />}
          />
          <IconButton aria-label="delete" className={classes.icon} onClick={() => onDeleteClick(post.id)}>
            <DeleteIcon color="error" fontSize="small" />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};
LinkIconBtn.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
};

export default connect(null, { deletePost })(PostCard);
