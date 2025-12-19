import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import registerImg from '../assets/images/register-img.png';
import PersonIcon from '@mui/icons-material/Person';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const Register = () => {
  return (
    <Grid
      spacing={2}
      container
      sx={{
        padding: 3,
      }}
    >
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Box
          component="img"
          alt="login-image"
          src={registerImg}
          sx={{ height: '500px', width: 'auto' }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography
          component="h4"
          sx={{ fontWeight: '700', fontSize: '36px', mb: 1 }}
        >
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
        >
          <CustomTextField
            placeholder="Enter First Name"
            fullWidth
            type="text"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonalInjuryIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <CustomTextField
            placeholder="Enter Last Name"
            fullWidth
            type="text"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonalInjuryIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
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
            placeholder="Enter Email"
            fullWidth
            type="email"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'text.primary' }} />
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
          <CustomTextField
            placeholder="Confirm Password"
            fullWidth
            type="password"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: 'text.disabled' }} />}
            label="I agree to all terms"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: '130px',
              color: 'background.default',
              ':hover': 'primary.light',
            }}
          >
            Register
          </Button>
          <Typography
            component="p"
            sx={{ fontWeight: '500', fontSize: '16px' }}
          >
            Already have an account? &nbsp;
            <Box
              component={Link}
              to="/auth/signin"
              sx={{ display: 'inline', color: 'info.light', cursor: 'pointer' }}
            >
              Sign In
            </Box>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
