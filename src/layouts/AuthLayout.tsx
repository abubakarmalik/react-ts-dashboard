import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import background from '../assets/bg/auth-bg.png';

const AuthLayout = () => {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 3,
            width: '100%',
            opacity: 1,
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
