import { Grid } from '@mui/material';
import TopHeading from '../components/ui/TopHeading';
import { theme } from '../theme';
import TaskCard from '../components/ui/TaskCard';
import cardimg4 from '../assets/images/cardimg4.png';
import cardimg5 from '../assets/images/cardimg5.png';
import TaskCardDetails from '../components/ui/TaskCardDetails';

const list1 = [
  'Listen to a podcast or audiobook',
  'Practice mindfulness or meditation',
  'Take photos of interesting sights along the way',
  'Practice obedience training with your dog',
  'Chat with neighbors or other dog walkers',
  'Listen to music or an upbeat playlist',
];

const VitalTaskPage = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 5 }}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: 'auto' },
          bgcolor: theme.palette.background.default,
          boxShadow: 4,
          borderRadius: 4,
        }}
      >
        <TopHeading
          heading="Vital Task"
          back=""
          link={false}
          barLength="45px"
        />

        <Grid
          container
          direction="column"
          spacing={2}
          sx={{ padding: 2, bgcolor: theme.palette.background.default }}
        >
          <TaskCard
            heading="Walk the dog"
            paragraph="Take the dog to the park and bring treats as well....."
            img={cardimg4}
            priority={true}
            priorityText="Extreme"
            priorityColor={theme.palette.error.main}
            status="Not Started"
            statusColor={theme.palette.error.main}
            disabledText="Created on: 19/06/2023"
            selected={true}
          />
          <TaskCard
            heading="Take grandma to hospital"
            paragraph="Go back home and take grandma to the hosp...."
            img={cardimg5}
            priority={true}
            priorityText="Moderate"
            priorityColor={theme.palette.info.light}
            status="In Progress"
            statusColor={theme.palette.info.dark}
            disabledText="Created on: 19/06/2023"
            selected={false}
          />
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 7 }}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: 'auto' },
          bgcolor: theme.palette.background.default,
          boxShadow: 4,
          padding: 2,
          borderRadius: 4,
        }}
      >
        <TaskCardDetails
          title="Walk the dog"
          priorityText="Extreme"
          priorityColor={theme.palette.error.main}
          statusText="Not Started"
          statusColor={theme.palette.error.main}
          img={cardimg4}
          disabledText="Created on: 19/06/2023"
          h1=""
          p1="Take the dog to the park and bring treats as well."
          h2=""
          p2="Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!"
          h3=""
          p3=""
          h4=""
          p4=""
          decimal={true}
          list1Heading=""
          list1={list1}
          vital={false}
          back={false}
        />
      </Grid>
    </Grid>
  );
};

export default VitalTaskPage;
