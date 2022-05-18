import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';

import LoginPage from 'pages/LoginPage/LoginPage';

const useStyles = () => ({
  root: {
    width: '100%',
    height: '100vh',
  },
});

const AppRouter = () => {
  const classes = useStyles();

  return (
    <Box sx={classes.root}>
      <Routes>
        <Route path='/' element={<div>Start Page</div>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Box>
  );
};

export default AppRouter;
