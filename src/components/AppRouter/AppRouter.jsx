import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';

import LoginPage from 'pages/LoginPage/LoginPage';
import AnimatedBack from 'components/AnimatedBack/AnimatedBack';

const useStyles = () => ({
  root: {
    zIndex: '1',
    position: 'absolute',
    width: '100%',
    height: '100vh',
  },
});

const AppRouter = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={classes.root}>
        <Routes>
          <Route path='/' element={<div>Start Page</div>} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Box>

      <AnimatedBack />
    </>
  );
};

export default AppRouter;
