import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';
import LoginForm from './LoginForm/LoginForm';
import SingUpForm from './SignUpForm/SignUpForm';

const LoginPage = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.loginFormBlock}>
        <Typography align='center' variant='h3'>
          Hello!
        </Typography>

        {isLogin ? <LoginForm /> : <SingUpForm />}

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
