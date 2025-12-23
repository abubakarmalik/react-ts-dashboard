import { Box, Grid, Typography, useTheme } from '@mui/material';
import book from '../assets/icons/Book.png';
import ProgressBar from './ProgressBar';

const TaskStatus = () => {
  const theme = useTheme();
  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Box component="div" sx={{ display: 'flex' }}>
        <Box component="img" src={book} sx={{ mr: 1 }} />
        <Typography
          component="p"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: '15px',
            fontWeight: '500',
          }}
        >
          Task Status
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          component="div"
          sx={{ height: '100%', width: { xs: '30%', sm: '20%', md: '30%' } }}
        >
          <ProgressBar
            percentage={84}
            color={theme.palette.success.main}
            status="Completed"
          />
        </Box>
        <Box
          component="div"
          sx={{ height: '100%', width: { xs: '30%', sm: '20%', md: '30%' } }}
        >
          <ProgressBar
            percentage={64}
            color={theme.palette.info.dark}
            status="In Progress"
          />
        </Box>
        <Box
          component="div"
          sx={{ height: '100%', width: { xs: '30%', sm: '20%', md: '30%' } }}
        >
          <ProgressBar
            percentage={13}
            color={theme.palette.error.main}
            status="Not Started"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default TaskStatus;
