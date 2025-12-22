import { Box, Grid, Typography, useTheme } from '@mui/material';
import pending from '../assets/icons/Pending.png';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import TaskCard from './ui/TaskCard';
import cardimg1 from '../assets/images/cardimg1.png';
import cardimg2 from '../assets/images/cardimg2.png';

interface TodoSectionPropsTypes {
  handleOpenAddTask: () => void;
}

const TodoSection = ({ handleOpenAddTask }: TodoSectionPropsTypes) => {
  const theme = useTheme();
  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box component="div" sx={{ display: 'flex' }}>
          <Box component="img" src={pending} />
          <Typography
            component="p"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '15px',
              fontWeight: '500',
            }}
          >
            To-Do
          </Typography>
        </Box>
        <Box component="div" sx={{ display: 'flex' }}>
          <AddIcon
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '18px',
              paddingRight: '2px',
            }}
          />
          <Typography
            component="p"
            onClick={handleOpenAddTask}
            sx={{
              color: theme.palette.text.disabled,
              fontSize: '12px',
              fontWeight: '400',
              cursor: 'pointer',
            }}
          >
            Add Task
          </Typography>
        </Box>
      </Box>
      <Typography
        component="p"
        sx={{ mt: 1, fontSize: '12px', fontWeight: '400' }}
      >
        20 June &nbsp;&nbsp;&nbsp;
        <Box component="span" sx={{ color: theme.palette.text.disabled }}>
          <CircleIcon sx={{ fontSize: '6px' }} /> Today
        </Box>
      </Typography>
      <Grid container direction="column" spacing={2} sx={{ padding: 2 }}>
        <TaskCard
          heading="Attend Nischal’s Birthday Party"
          paragraph="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)....."
          img={cardimg1}
          priority={true}
          priorityText="Moderate"
          priorityColor={theme.palette.info.light}
          status="Not Started"
          statusColor={theme.palette.error.main}
          disabledText="Created on: 19/06/2023"
          selected={false}
        />
        <TaskCard
          heading="Landing Page Design for TravelDays"
          paragraph="Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)"
          img={cardimg2}
          priority={true}
          priorityText="Moderate"
          priorityColor={theme.palette.info.light}
          status="In Progress"
          statusColor={theme.palette.info.dark}
          disabledText="Created on: 19/06/2023"
          selected={false}
        />
      </Grid>
    </Box>
  );
};

export default TodoSection;
