import { Box, Typography } from '@mui/material';

import CustomTextField from 'components/TextField/TextField';

const useStyles = () => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormBlock: {
    width: '300px',
    padding: '16px',
    background: '#2e2e31d6',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Box sx={classes.root}>
      <Box sx={classes.loginFormBlock}>
        <Typography align='center' variant='h3'>
          Hello!
        </Typography>
        <CustomTextField label='Login' />
        <CustomTextField label='Password' />
        <Typography align='center' variant='h7'>
          Don't have an account? Sign up
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
