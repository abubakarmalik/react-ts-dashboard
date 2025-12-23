import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { styled } from '@mui/material/styles';
import loginImg from '../assets/images/login-img.png';
import fb from '../assets/icons/fb.png';
import google from '../assets/icons/google.png';
import x from '../assets/icons/x.png';
import { Link, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState, useEffect } from 'react';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000',
    },

    // border color on hover
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },

    // focused border
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },

  // text & placeholder styling
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.primary,

    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },

    '&:hover': {
      color: theme.palette.text.primary,
    },

    '&:hover::placeholder': {
      color: theme.palette.primary.main,
    },
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const handleLoninbtn = () => {
    navigate('/');
  };

  useEffect(() => {
    setInterval(() => setShowAlert(false), 2000);
  }, [showAlert]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
      }}
    >
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          p: 4,
        }}
      >
        {showAlert && (
          <Alert
            icon={<CheckCircleIcon fontSize="inherit" />}
            severity="success"
          >
            Confirmation that Logout was successful.
          </Alert>
        )}
        <Typography
          component="h4"
          sx={{ fontWeight: '700', fontSize: '36px', mb: 1 }}
        >
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <CustomTextField
            placeholder="Enter Username"
            fullWidth
            type="text"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <CustomTextField
            placeholder="Enter Password"
            fullWidth
            type="password"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: 'text.disabled' }} />}
            label="Remember Me"
          />
          <Button
            variant="contained"
            type="button"
            sx={{
              width: '130px',
              color: 'background.default',
              ':hover': 'primary.light',
            }}
            onClick={handleLoninbtn}
          >
            Login
          </Button>
          <Box component="div" sx={{ display: 'flex', gap: 1 }}>
            <Typography
              component="p"
              sx={{ fontWeight: '500', fontSize: '16px', mt: 4 }}
            >
              Or, Login with
            </Typography>
            <Box
              component="img"
              src={fb}
              alt="fb"
              sx={{ height: '24px', width: '24px', mt: 3.5, cursor: 'pointer' }}
            />
            <Box
              component="img"
              src={google}
              alt="google"
              sx={{ height: '24px', width: '24px', mt: 3.5, cursor: 'pointer' }}
            />
            <Box
              component="img"
              src={x}
              alt="x"
              sx={{ height: '24px', width: '24px', mt: 3.5, cursor: 'pointer' }}
            />
          </Box>

          <Typography
            component="p"
            sx={{ fontWeight: '500', fontSize: '16px' }}
          >
            Don’t have an account? &nbsp;
            <Box
              component={Link}
              to="/auth/signup"
              sx={{ display: 'inline', color: 'info.light', cursor: 'pointer' }}
            >
              Create One
            </Box>
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Box
          component="img"
          alt="login-image"
          src={loginImg}
          sx={{ height: '500px', width: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
