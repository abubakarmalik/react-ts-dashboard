import { Box, Grid, Paper } from '@mui/material';
import DashboardTopbar from '../components/DashboardTopbar';
import { theme } from '../theme';
import styled from '@emotion/styled';
import TodoSection from '../components/TodoSection';
import TaskStatus from '../components/TaskStatus';
import CompleteTask from '../components/CompleteTask';
import TaskCard from '../components/ui/TaskCard';
import cardimg3 from '../assets/images/cardimg3.png';
import { useState } from 'react';
import InviteModel from '../components/ui/InviteModel';

const Item = styled(Paper)(({}) => ({
  backgroundColor: theme.palette.background.default,
  padding: 1,
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <DashboardTopbar handleOpen={handleOpen} />
      <Box
        sx={{
          padding: 1,
          mt: 2,
          borderRadius: '3px',
          border: '1px solid #cacaca',
          height: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Item
              elevation={4}
              sx={{ bgcolor: theme.palette.background.default, height: 'auto' }}
            >
              <TodoSection />
            </Item>
            <Item
              elevation={4}
              sx={{
                bgcolor: theme.palette.background.default,
                padding: 2,
                height: 'auto',
              }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{ padding: 4, bgcolor: theme.palette.background.default }}
              >
                <TaskCard
                  heading="Presentation on Final Product"
                  paragraph="Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for..."
                  img={cardimg3}
                  priority={true}
                  priorityText="Moderate"
                  priorityColor={theme.palette.info.light}
                  status="In Progress"
                  statusColor={theme.palette.info.dark}
                  disabledText="Created on: 19/06/2023"
                  selected={false}
                />
              </Grid>
            </Item>
          </Grid>
          <Grid container spacing={2} size={{ xs: 12, sm: 12, md: 6 }}>
            <Grid size={{ xs: 12 }}>
              <Item
                elevation={4}
                sx={{
                  bgcolor: theme.palette.background.default,
                  height: 'auto',
                }}
              >
                <TaskStatus />
              </Item>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Item
                elevation={4}
                sx={{
                  bgcolor: theme.palette.background.default,
                  height: 'auto',
                }}
              >
                <CompleteTask />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <InviteModel open={open} handleClose={handleClose} />
    </>
  );
};

export default Dashboard;
