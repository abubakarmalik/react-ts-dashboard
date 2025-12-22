import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';
import OneFieldForm from './OneFieldForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.default',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

interface StatusModelType {
  open: boolean;
  handleClose: () => void;
  heading: string;
  title: string;
}

export default function StatusModel({
  open,
  handleClose,
  heading,
  title,
}: StatusModelType) {
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
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{}}>
              <Typography component="p">{heading}</Typography>
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
                to="#"
                underline="hover"
                onClick={handleClose}
                sx={{ color: theme.palette.text.primary }}
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
            <OneFieldForm title={title} buttonText="Create" radio={false} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
