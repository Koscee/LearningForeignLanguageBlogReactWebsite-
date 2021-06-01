import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { CircularProgress, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import { green } from '@material-ui/core/colors';
import buttonStyles from './loadButtonStyles';
import uploadImage from '../../actions/imageUploadActions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  iconButton: {
    // background: theme.palette.customWhite.shade50,
    height: 20,
    width: 35,
  },
  fabProgress: {
    color: green[400],
    position: 'absolute',
    top: -11,
    left: 5,
    zIndex: 1,
  },
}));

const convertToImageDataParam = (name, value) => ({
  target: { name, value }
});

function UploadImageButtons(props) {
  const {
    onChange, name, userId,
  } = props;

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  let imageURL;
  const getImageURL = async (e) => {
    console.log('getImageUrl func runned');
    console.log('Files', e.target.files[0]);
    if (!loading) {
      setLoading(true);
    }
    const file = e.target.files[0];
    const imageDir = `/users/avatars/user_${userId}`;
    const responseURL = await props.uploadImage(file, imageDir, setLoading);
    // console.log('res', responseURL);
    imageURL = responseURL;
    // console.log('Image Url', imageURL);
  };

  return (
    <div className={classes.root}>
      <label htmlFor="icon-button-file">
        <input
          name={name}
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={
            async (e) => {
              await getImageURL(e);
              onChange(convertToImageDataParam(name, imageURL));
              // console.log('after On change', imageURL);
            }
            }
        />
        <div className={buttonStyles.wrapper}>
          <Fab size="small" className={{ ...classes.iconButton }} color="secondary" aria-label="upload picture" component="span">

            <PhotoCamera fontSize="small" />
          </Fab>
          {loading && <CircularProgress size={43} className={classes.fabProgress} />}
        </div>
      </label>
    </div>
  );
}

UploadImageButtons.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default connect(null, { uploadImage })(UploadImageButtons);
