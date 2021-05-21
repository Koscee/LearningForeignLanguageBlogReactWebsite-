import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import { Alert, TextField } from '@material-ui/core';
// import SnackBarAlert from '../SnacKBarAlert';

const customStyles = (imageData) => ({
  dropzone: {
    '& .MuiInputBase-root': {
      background: `linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,.3)), url(${imageData})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '& > * .MuiDropzoneArea-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/60-lines.png")'

    },
    '& > * .MuiGrid-root>.MuiGrid-item': {
      width: '100%',
      margin: 'auto'
    },
    '& > * .MuiDropzonePreviewList-removeButton': {
      top: '130px'
    }
  }
});

const FileUploadDropzone = React.forwardRef((props, inputRef) => {
  const { fileObjects, onAdd, onDelete } = props;
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: ''
  });

  return (
    <div style={{ width: '100%', padding: 20, position: 'relative' }}>

      <DropzoneAreaBase
        ref={(ref) => { inputRef(ref ? ref.inputElement : null); }}
        dropzoneText="Drag and drop an Image here or click to upload"
        acceptedFiles={['image/*']}
        maxFileSize={4000000}
        fileObjects={fileObjects}
        onAdd={onAdd}
        onDelete={onDelete}
        previewGridProps={{
          container: { maxWidth: '100%', },
          item: {
            maxWidth: '100%',
            // margin: 'auto',
          },
        }}
        getFileRemovedMessage={() => 'Image successfully deleted'}
        getFileAddedMessage={() => 'Image successfully added'}
        // getDropRejectMessage={() => {}}
        // onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
        onAlert={(message, severity) => setAlert({
          ...alert, open: true, message, severity
        })}
        showPreviewsInDropzone
        showFileNames
        showAlerts={false}
      />
      {
          alert.open && (
            <>
              <Alert
                onClose={() => setAlert({})}
                severity={alert.severity}
                variant="filled"
                sx={{
                  position: 'absolute', top: 10,
                }}
              >
                {alert.message}
                <span style={{ display: 'none' }}>{ setTimeout(() => setAlert({}), 3000,) }</span>
              </Alert>
            </>
          )
        }
    </div>
  );
});

const convertToImageDataParam = (name, value) => ({
  target: { name, value }
});

function UploadField(props) {
  const {
    name, onAdd, onDelete, error = null, ...others
  } = props;

  const [fileObjects, setFileObjects] = useState([]);
  const [data, setData] = useState('');

  return (
    <TextField
      sx={customStyles(data).dropzone}
      fullWidth
      required
      name={name}
      variant="outlined"
      label="Cover Image"
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: FileUploadDropzone,
        inputProps: {
          fileObjects,
          onAdd: (newFileObjs) => {
            console.log('onAdd', newFileObjs);
            setFileObjects(newFileObjs);
            setData(newFileObjs[0].data);
            onAdd(convertToImageDataParam(name, newFileObjs[0].data));
          },
          onDelete: (deleteFileObj) => {
          //   const index = fileObjects.findIndex((obj) => obj.file.id === deleteFileObj.id);
            setFileObjects([]);
            setData('');
            onDelete(convertToImageDataParam(name, ''));
            console.log('onDelete', deleteFileObj);
          },
        }
      }}
      {...(error && { error: true, helperText: error })}
      {...others}
    />
  );
}

export default UploadField;

FileUploadDropzone.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  fileObjects: PropTypes.array.isRequired
};

UploadField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
