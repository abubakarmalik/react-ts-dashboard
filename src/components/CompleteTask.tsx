import { Box, Grid, Typography, useTheme } from '@mui/material';
import book from '../assets/icons/Book.png';
import TaskCard from './TaskCard';
import cardimg4 from '../assets/images/cardimg4.png';
import cardimg3 from '../assets/images/cardimg3.png';

const CompleteTask = () => {
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
          Completed Task
        </Typography>
      </Box>
      <Grid container direction="column" spacing={2} sx={{ padding: 2 }}>
        <TaskCard
          heading="Walk the dog"
          paragraph="Take the dog to the park and bring treats as well."
          img={cardimg4}
          priority={false}
          priorityText=""
          priorityColor={theme.palette.success.main}
          status="Completed"
          statusColor={theme.palette.success.main}
          disabledText="Created on: 19/06/2023"
          selected={false}
        />
        <TaskCard
          heading="Conduct meeting"
          paragraph="Meet with the client and finalize requirements."
          img={cardimg3}
          priority={false}
          priorityText=""
          priorityColor={theme.palette.success.main}
          status="Completed"
          statusColor={theme.palette.success.main}
          disabledText="Created on: 19/06/2023"
          selected={false}
        />
      </Grid>
    </Box>
  );
};

export default CompleteTask;
