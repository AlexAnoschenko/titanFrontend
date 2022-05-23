import { Button } from '@mui/material';

const useStyles = () => ({
  root: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
});

const CustomButton = ({ text }) => {
  const classes = useStyles();

  return (
    <Button variant='contained' sx={classes.root}>
      {text}
    </Button>
  );
};

export default CustomButton;
