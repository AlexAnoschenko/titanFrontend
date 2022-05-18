import { TextField } from '@mui/material';

const useStyles = () => ({
  root: {
    background: '#e0e0e0',
    borderRadius: '8px 8px 8px 8px',
    width: '100%',

    '& .MuiInputLabel-root': {
      fontSize: '20px',

      '&.Mui-focused': {
        color: '#575757',
      },
    },

    '& .MuiFilledInput-input': {
      fontSize: '20px',
    },

    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after': {
      border: 'none',
    },
  },
});

const CustomTextField = ({
  label = 'Text',
  id,
  name,
  value,
  onChange,
  error,
  type,
  size = 'small',
}) => {
  const classes = useStyles();

  return (
    <TextField
      sx={classes.root}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      label={label}
      variant='filled'
      type={type}
      size={size}
    />
  );
};

export default CustomTextField;
