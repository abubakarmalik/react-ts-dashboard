import { Box, Grid, Paper, useTheme } from '@mui/material';
import DashboardTopbar from '../components/DashboardTopbar';
import styled from '@emotion/styled';
import TodoSection from '../components/TodoSection';
import TaskStatus from '../components/TaskStatus';
import CompleteTask from '../components/CompleteTask';
import TaskCard from '../components/TaskCard';
import cardimg3 from '../assets/images/cardimg3.png';
import { useState } from 'react';
import InviteModel from '../components/InviteModel';
import AddTaskModel from '../components/AddTaskModel';

const Item = styled(Paper)(({}) => ({
  backgroundColor: 'background.default',
  padding: 1,
}));

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openAddTask, setOpenAddTask] = useState<boolean>(false);
  const handleOpenAddTask = () => setOpenAddTask(true);
  const handleCloseAddTask = () => setOpenAddTask(false);
  return (
    <>
      <DashboardTopbar handleOpen={handleOpen} />
      <Box
        sx={{
          padding: 1,
          mt: 2,
          borderRadius: '3px',
          border: '1px solid #cacaca',
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ height: 'auto' }}>
            <Item
              elevation={4}
              sx={{
                bgcolor: theme.palette.background.default,
                height: 'auto',
                borderRadius: 4,
              }}
            >
              <TodoSection handleOpenAddTask={handleOpenAddTask} />
            </Item>
            <Item
              elevation={4}
              sx={{
                bgcolor: theme.palette.background.default,
                height: 'auto',
                borderRadius: 4,
                mt: 2,
              }}
            >
              <Box
                component="div"
                sx={{
                  padding: 4,
                }}
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
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ height: 'auto' }}>
            <Item
              elevation={4}
              sx={{
                bgcolor: theme.palette.background.default,
                borderRadius: 4,
                height: '35%',
              }}
            >
              <TaskStatus />
            </Item>
            <Item
              elevation={4}
              sx={{
                bgcolor: theme.palette.background.default,
                borderRadius: 4,
                mt: 2,
                height: '62.4%',
              }}
            >
              <CompleteTask />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <InviteModel open={open} handleClose={handleClose} />
      <AddTaskModel
        open={openAddTask}
        handleClose={handleCloseAddTask}
        heading="Add New Task"
      />
    </>
  );
};

export default Dashboard;
