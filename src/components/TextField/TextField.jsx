import { TextField } from '@mui/material';

const useStyles = ({ error }) => ({
  root: {
    background: '#e0e0e0',
    borderRadius: '8px',
    width: '100%',

    '& .MuiInputLabel-root': {
      fontSize: '20px',

      '&.Mui-focused': {
        color: '#575757',
      },
    },

    '& .MuiFilledInput-input': {
      height: '55px',
      boxSizing: 'border-box',
      border: error ? '2px solid red' : 'none',
      borderRadius: '8px',
      fontSize: '20px',
    },

    '& .MuiFilledInput-root:before': {
      border: 'none',
    },

    '& .MuiFilledInput-root:after': {
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
  const classes = useStyles({ error });

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
      InputProps={{ disableUnderline: true }}
    />
  );
};

export default CustomTextField;
