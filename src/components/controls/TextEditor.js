import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  textArea: {
    width: '100%',
    // '& .quill': { width: '100%', background: 'pink' },
    '& .ql-editor': { height: '400px' },
    '& .ql-container': { borderRadius: '0 0 4px 4px', }
  },
  toolbar: {
    '& .ql-toolbar.ql-snow': {
      borderRadius: '4px 4px 0 0',
      background: '#fafafa'
    }
  },
  editorFocus: {
    border: 'none',
    '& .quill': {
      border: 'none',
    },
    '& .ql-container': { boxShadow: '0 2px 4px 2px rgba(131, 202, 255, .5)', },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, .1)',
    },
  },
  error: {
    '& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px'
    }
  },

});

const toolbarOptions = [
  [
    'bold', 'italic', 'underline', 'strike',
    'blockquote', // blockquote
    'code-block',
    { color: [] },
    { script: 'sub' }, { script: 'super' }, // superscript/subscript
    { direction: 'rtl' }, // text direction
    // { font: [] },
  ], // toggled buttons
  [
    { header: [1, 2, 3, 4, 5, 6] },
    { size: [] }
  ],
  [
    { list: 'ordered' }, { list: 'bullet' },
    { align: [] },
    // { indent: '-1' }, { indent: '+1' } // outdent/indent
  ],
  [
    'link', 'image', 'video', // link, image
  ],

  // [ 'code-block' ] // code-block
  //   ['clean'] // remove formatting button
];
// const formats = [
//   'header', 'font', 'size',
//   'bold', 'italic', 'underline', 'strike', 'blockquote',
//   'list', 'bullet',
//   'link', 'image', 'video'
// ];

const modules = {
  toolbar: toolbarOptions,
};

const convertToTextEditorParam = (name, value) => ({
  target: { name, value }
});

const CustomTextEditor = React.forwardRef((props, inputRef) => {
  const {
    name, value, onChange, onEditorFocus, onEditorBlur
  } = props;
  const classes = useStyles();
  //   const [state, setState] = useState('');
  //   const handleOnChange = (e) => { console.log(e); setState(); };
  return (
    <div className={`${classes.textArea} ${classes.toolbar}`}>
      <ReactQuill
        ref={(ref) => { inputRef(ref ? ref.inputElement : null); }}
        // ref={inputRef}
        name={name}
        value={value}
        modules={modules}
        theme="snow"
        // formats={formats}
        placeholder="Type your content here"
        onChange={(e) => onChange(convertToTextEditorParam(name, e))}
        onFocus={onEditorFocus}
        onBlur={onEditorBlur}
      />
    </div>
  );
});

export default function TextEditor(props) {
  const classes = useStyles();

  const {
    name, value, onChange, error = null
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextField
      className={`${(error && classes.error) || (isFocus && classes.editorFocus)}`}
      InputProps={{
        inputComponent: CustomTextEditor,
        inputProps: {
          name,
          value,
          onChange,
          onEditorFocus: () => setIsFocus(true),
          onEditorBlur: () => setIsFocus(false)
        }
      }}
      {...(error && { error: true, helperText: error })}
    />
    // <CustomTextEditor
    //   ref={(ref) => (ref ? ref.inputElement : null)}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    //   error={error}
    // />
  );
}

CustomTextEditor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEditorFocus: PropTypes.func.isRequired,
  onEditorBlur: PropTypes.func.isRequired
};

TextEditor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
