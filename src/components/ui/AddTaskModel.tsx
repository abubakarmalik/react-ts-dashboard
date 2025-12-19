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
  Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CircleIcon from '@mui/icons-material/Circle';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useRef } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.default',
  boxShadow: 24,
  p: 4,
  height: '80vh',
  overflow: 'scroll',
};

interface AddTaskModelType {
  open: boolean;
  handleClose: () => void;
  heading: string;
}

export default function AddTaskModel({
  open,
  handleClose,
  heading,
}: AddTaskModelType) {
  const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

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
      sx={{ overflow: 'auto' }}
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
            {/* Form */}
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
                Title
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
              <Typography
                component="p"
                sx={{
                  fontWeight: '600',
                  mb: 1,
                  fontSize: { xs: '12px', sm: '14px' },
                  ml: 1,
                  mt: 1,
                }}
              >
                Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="Responsive variant">
                  <DatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
              </LocalizationProvider>
              <Typography
                component="p"
                sx={{
                  fontWeight: '600',
                  mb: 1,
                  fontSize: { xs: '12px', sm: '14px' },
                  ml: 1,
                  mt: 1,
                }}
              >
                Priority
              </Typography>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Box component="div">
                  <Typography component="span">
                    <CircleIcon
                      sx={{ fontSize: 12, color: theme.palette.error.main }}
                    />
                    &nbsp; Extreme
                  </Typography>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 20, padding: 0 } }}
                  />
                </Box>
                <Box component="div">
                  <Typography component="span">
                    <CircleIcon
                      sx={{ fontSize: 12, color: theme.palette.info.light }}
                    />
                    &nbsp; Moderate
                  </Typography>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 20, padding: 0 } }}
                  />
                </Box>
                <Box component="div">
                  <Typography component="span">
                    <CircleIcon
                      sx={{ fontSize: 12, color: theme.palette.success.main }}
                    />
                    &nbsp; Low
                  </Typography>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 20, padding: 0 } }}
                  />
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: '600',
                      mb: 1,
                      fontSize: { xs: '12px', sm: '14px' },
                      ml: 1,
                      mt: 1,
                    }}
                  >
                    Task Description
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={5}
                    defaultValue=""
                    placeholder="Start writing here"
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 8, md: 5 }}>
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: '600',
                      mb: 1,
                      fontSize: { xs: '12px', sm: '14px' },
                      ml: 1,
                      mt: 1,
                    }}
                  >
                    Upload Image
                  </Typography>
                  <Box
                    sx={{
                      border: `1px solid #c3c0c0`,
                      borderRadius: 2,
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: '0.2s',
                      padding: 1,
                    }}
                    onClick={handleBrowseClick}
                  >
                    <ImageOutlinedIcon
                      sx={{
                        fontSize: 48,
                        color: '#98A2B3',
                        mb: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: '#98A2B3',
                        mb: 1,
                      }}
                    >
                      Drag&Drop files here <br /> or
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#98A2B3',
                        color: '#98A2B3',
                      }}
                    >
                      Browse
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 2,
                background: theme.palette.secondary.main,
                color: theme.palette.background.default,
                width: { xs: 'auto' },
              }}
              onClick={handleClose}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
