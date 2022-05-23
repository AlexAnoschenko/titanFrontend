import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from 'components/Button/Button';

import CustomTextField from 'components/TextField/TextField';
import { useStyles } from './styles';

const LoginPage = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.loginFormBlock}>
        <Typography align='center' variant='h3'>
          Hello!
        </Typography>
        <CustomTextField label='Login' />
        {isLogin ? null : <CustomTextField label='Email' />}
        <CustomTextField label='Password' />
        <CustomButton text={isLogin ? 'Login' : 'Sign up'} />
        <Typography align='center' variant='h7' sx={classes.boldText}>
          {isLogin ? "Don't have an account?" : 'Have an account?'}{' '}
          <Typography
            variant='h7'
            sx={classes.singUpText}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up!' : 'Log in'}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
