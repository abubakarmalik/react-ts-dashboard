import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {
  Link as MuiLink,
  Grid,
  TextField,
  Button,
  Avatar,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import avatar1 from '../assets/images/invite-avatar1.png';
import avatar2 from '../assets/images/invite-avatar2.png';
import avatar3 from '../assets/images/invite-avatar3.png';
import avatar4 from '../assets/images/invite-avatar4.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    sm: 600,
    md: 700,
  },

  bgcolor: 'background.default',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: 4,
  height: '80vh',
  overflow: 'auto',
};

interface InviteModelType {
  open: boolean;
  handleClose: () => void;
}

const inviteRow = [
  {
    id: 1,
    img: avatar1,
    name: 'Upashna Gurung',
    email: 'uppaeygrg332@gmail.com',
  },
  { id: 2, img: avatar2, name: 'Jeremy Lee', email: 'jerrylee1996@gmail.com' },
  { id: 3, img: avatar3, name: 'Thomas Park', email: 'parktho123@gmail.com' },
  {
    id: 4,
    img: avatar4,
    name: 'Rachel Takahasi',
    email: 'takahasirae32@gmail.com',
  },
];

export default function InviteModel({ open, handleClose }: InviteModelType) {
  const theme = useTheme();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid
            container
            sx={{
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'row' },
              gap: 1,
            }}
          >
            <Box sx={{}}>
              <Typography
                component="p"
                sx={{ fontSize: { xs: '12px', sm: '18px' } }}
              >
                Send an invite to a new member
              </Typography>
              <Box
                component="div"
                sx={{
                  height: '3px',
                  width: '100px',
                  bgcolor: theme.palette.secondary.main,
                }}
              ></Box>
            </Box>
            <Typography component="p">
              <MuiLink
                component={Link}
                to="/"
                underline="hover"
                onClick={handleClose}
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { xs: '12px', sm: '18px' },
                }}
              >
                Go Back
              </MuiLink>
            </Typography>
          </Grid>
          <Box
            sx={{
              padding: 2,
              mt: 2,
              borderRadius: '3px',
              border: '1px solid #cacaca',
            }}
          >
            <Typography component="p" sx={{ fontWeight: '600', mb: 1 }}>
              Email
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row' },
                gap: 1,
              }}
            >
              <TextField
                id="fullWidth"
                type="email"
                placeholder="Enter Email"
                required
                autoFocus
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    width: { xs: 120, sm: 300, md: 350 },
                    height: { xs: 30, sm: 40, md: 50 },
                    color: theme.palette.text.primary,
                    fontSize: { xs: 9, sm: 12, md: 14 },
                  },
                  '& .Mui-focused': {
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.text.primary,
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  background: theme.palette.secondary.main,
                  color: theme.palette.background.default,
                  width: { xs: 100, sm: 130 },
                  height: { xs: 30, sm: 40, md: 50 },
                  fontSize: { xs: 9, sm: 12, md: 14 },
                  ml: 1,
                }}
              >
                Send Invite
              </Button>
            </Box>
            <Typography component="p" sx={{ fontWeight: '600', mb: 0, mt: 1 }}>
              Members
            </Typography>
            <Box component="div">
              {inviteRow.map((item) => {
                return (
                  <Grid
                    key={item.id}
                    container
                    direction="row"
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'nowrap',
                      gap: 1,
                    }}
                  >
                    <Box component="div" sx={{ display: 'flex', mt: 1 }}>
                      <Avatar
                        src={item.img}
                        alt="avatar"
                        sx={{ height: 45, width: 45 }}
                      />
                      <Box
                        component="div"
                        sx={{
                          ml: 1,
                          lineHeight: '1px',
                          fontWeight: 700,
                          fontSize: '14px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: { xs: 140, sm: 'none' },
                        }}
                      >
                        <Typography
                          component="p"
                          sx={{ fontWeight: '700', fontSize: '14px' }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}
                        >
                          {item.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="div">
                      <Typography
                        component="p"
                        sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}
                      >
                        Can edit
                        <Box component="span" sx={{ ml: 1 }}>
                          <KeyboardArrowDownIcon />
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
            <Typography component="p" sx={{ fontWeight: '600', mb: 1, mt: 2 }}>
              Project Link
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
              }}
            >
              <TextField
                id="fullWidth"
                type="email"
                placeholder="https://sharelinkhereandthere.com/34565yy29"
                autoFocus
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    width: { xs: 120, sm: 300, md: 350 },
                    height: { xs: 30, sm: 40, md: 50 },
                    color: theme.palette.text.primary,
                    fontSize: { xs: 9, sm: 12, md: 14 },
                  },
                  '& .Mui-focused': {
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.text.primary,
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  background: theme.palette.secondary.main,
                  color: theme.palette.background.default,
                  width: { xs: 100, sm: 130 },
                  height: { xs: 30, sm: 40, md: 50 },
                  fontSize: { xs: 9, sm: 12, md: 14 },
                }}
              >
                Copy Link
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
