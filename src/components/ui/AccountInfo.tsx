import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Ellipse from '../../assets/images/Ellipse.png';
import { theme } from '../../theme';

const AccountInfo = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={Ellipse}
          alt="profile"
          sx={{
            height: { xs: 70, sm: 80, md: 90 },
            width: { xs: 70, sm: 80, md: 90 },
          }}
        />
        <Box component="div">
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              fontWeight: '600',
            }}
          >
            Sundar Gurung
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '10px', sm: '12px', md: '14px' },
              fontWeight: '400',
            }}
          >
            sundargurung360@gmail.com
          </Typography>
        </Box>

        <Grid
          container
          padding={2}
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            border: '1px solid gray',
            height: { xs: 'auto', sm: 'auto', md: 'auto' },
            bgcolor: theme.palette.background.default,
            borderRadius: 4,
          }}
        >
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: '600',
                mb: 1,
                fontSize: { xs: '12px', sm: '14px' },
                ml: 1,
              }}
            >
              Full Name
            </Typography>
            <TextField
              label=""
              id="fullWidth"
              type="text"
              placeholder=""
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: { xs: 220, sm: 400, md: 500 },
                  height: { xs: 40 },
                  color: theme.palette.text.primary,
                },
                '& .Mui-focused': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: '600',
                mb: 1,
                fontSize: { xs: '12px', sm: '14px' },
                ml: 1,
              }}
            >
              Last Name
            </Typography>
            <TextField
              label=""
              id="fullWidth"
              type="text"
              placeholder=""
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: { xs: 220, sm: 400, md: 500 },
                  height: { xs: 40 },
                  color: theme.palette.text.primary,
                },
                '& .Mui-focused': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: '600',
                mb: 1,
                fontSize: { xs: '12px', sm: '14px' },
                ml: 1,
              }}
            >
              Email Address
            </Typography>
            <TextField
              label=""
              id="fullWidth"
              type="email"
              placeholder=""
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: { xs: 220, sm: 400, md: 500 },
                  height: { xs: 40 },
                  color: theme.palette.text.primary,
                },
                '& .Mui-focused': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: '600',
                mb: 1,
                fontSize: { xs: '12px', sm: '14px' },
                ml: 1,
              }}
            >
              Contact Number
            </Typography>
            <TextField
              label=""
              id="fullWidth"
              type="number"
              placeholder=""
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: { xs: 220, sm: 400, md: 500 },
                  height: { xs: 40 },
                  color: theme.palette.text.primary,
                },
                '& .Mui-focused': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontWeight: '600',
                mb: 1,
                fontSize: { xs: '12px', sm: '14px' },
                ml: 1,
              }}
            >
              Position
            </Typography>
            <TextField
              label=""
              id="fullWidth"
              type="email"
              placeholder=""
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  width: { xs: 220, sm: 400, md: 500 },
                  height: { xs: 40 },
                  color: theme.palette.text.primary,
                },
                '& .Mui-focused': {
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                },
              }}
            />
            <Grid
              container
              direction="row"
              spacing={2}
              padding={0}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                mt: 3,
                mb: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  background: theme.palette.secondary.main,
                  color: theme.palette.background.default,
                  width: { xs: 'auto', sm: 130 },
                }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  background: theme.palette.secondary.main,
                  color: theme.palette.background.default,
                  width: { xs: 'auto', sm: 130 },
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;
