import { Button } from '@mui/material';

const useStyles = () => ({
  root: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
});

const CustomButton = ({ text, type = 'button' }) => {
  const classes = useStyles();

  return (
    <Button variant='contained' sx={classes.root} type={type}>
      {text}
    </Button>
  );
};

export default CustomButton;
