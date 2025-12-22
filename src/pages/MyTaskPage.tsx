import { Box, Grid, Slider, Typography } from '@mui/material';
import { theme } from '../theme';
import TaskCard from '../components/ui/TaskCard';
import cardimg6 from '../assets/images/cardimg6.png';
import cardimg7 from '../assets/images/cardimg7.png';
import TaskCardDetails from '../components/ui/TaskCardDetails';
import { useState } from 'react';

const list1 = [
  'Ensure that the documents are authentic and up-to-date.',
  'Maintain confidentiality and security of sensitive information during the submission process.',
  'If there are specific guidelines or deadlines for submission, adhere to them diligently.',
];

const MyTaskPage = () => {
  function valuetext(value: number) {
    return `${value}`;
  }
  const [value, setValue] = useState<number[]>([7, 14]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <>
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
          <Grid
            container
            sx={{
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'row' },
              gap: 1,
              padding: 2,
            }}
          >
            <Box component="div" sx={{}}>
              <Typography
                component="p"
                sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '600' }}
              >
                My Task
              </Typography>
              <Box
                component="div"
                sx={{
                  height: '3px',
                  width: '30px',
                  bgcolor: theme.palette.secondary.main,
                }}
              ></Box>
            </Box>
          </Grid>

          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ padding: 2, bgcolor: theme.palette.background.default }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '500' }}
            >
              Filter Tasks by date
            </Typography>
            <Box component="div" sx={{ paddingX: 2 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={1}
                max={30}
                color="secondary"
              />
            </Box>
            <TaskCard
              heading="Submit Documents"
              paragraph="Make sure to submit all the necessary docum....."
              img={cardimg6}
              priority={true}
              priorityText="Extreme"
              priorityColor={theme.palette.error.main}
              status="Not Started"
              statusColor={theme.palette.error.main}
              disabledText="Created on: 19/06/2023"
              selected={true}
            />
            <TaskCard
              heading="Complete assignments"
              paragraph="The assignments must be completed to pass final year...."
              img={cardimg7}
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
            title="Submit Documents"
            priorityText="Extreme"
            priorityColor={theme.palette.error.main}
            statusText="Not Started"
            statusColor={theme.palette.error.main}
            img={cardimg6}
            disabledText="Created on: 19/06/2023"
            h1="Task Title:"
            p1="Document Submission."
            h2="Objective:"
            p2="To submit required documents for something important"
            h3="Task Description:"
            p3="Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing."
            h4="Deadline for Submission:"
            p4="End of Day"
            list1Heading="Additional Notes:"
            decimal={false}
            list1={list1}
            vital={false}
            back={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyTaskPage;
