import { Box, Button, Divider, Grid } from '@mui/material';
import { theme } from '../theme';
import TopHeading from '../components/ui/TopHeading';
import TableComponent from '../components/ui/TableComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import StatusModel from '../components/ui/StatusModel';

const TaskCategoryPage = () => {
  const [openTaskStatus, setOpenTaskStatus] = useState<boolean>(false);
  const handleOpenTaskStatus = () => setOpenTaskStatus(true);
  const handleCloseTaskStatus = () => setOpenTaskStatus(false);
  const [openPriorityStatus, setOpenPriorityStatus] = useState<boolean>(false);
  const handleOpenPriorityStatus = () => setOpenPriorityStatus(true);
  const handleClosePriorityStatus = () => setOpenPriorityStatus(false);

  const navigate = useNavigate();

  const handleAddCategoryButton = () => {
    navigate('/task-categories/add');
  };
  return (
    <>
      <Grid container spacing={1} sx={{ paddingY: 2 }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            height: { xs: 'auto', sm: 'auto', md: 'auto' },
            bgcolor: theme.palette.background.default,
            boxShadow: 4,
            borderRadius: 4,
          }}
        >
          <TopHeading
            heading="Task Categories"
            back="#"
            link={true}
            barLength="50px"
          />
          <Box component="div" sx={{ padding: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                fontSize: { xs: 10, sm: 12, md: 14 },
                background: theme.palette.secondary.main,
                color: theme.palette.background.default,
                width: { xs: 'auto' },
              }}
              onClick={handleAddCategoryButton}
            >
              Add Category
            </Button>
          </Box>
          <TableComponent
            heading="Task Status"
            buttonAction={handleOpenTaskStatus}
            editAction={handleOpenTaskStatus}
            buttonText="Add Task Status"
            list={['Completed', 'In Progress', 'Not Started']}
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <TableComponent
            heading="Task Priority"
            buttonAction={handleOpenPriorityStatus}
            editAction={handleOpenPriorityStatus}
            buttonText="Add New Priority"
            list={['Extreme', 'Low', 'High']}
          />
        </Grid>
      </Grid>
      <StatusModel
        open={openTaskStatus}
        handleClose={handleCloseTaskStatus}
        heading="Add Task Status"
        title="Task Status Title"
      />
      <StatusModel
        open={openPriorityStatus}
        handleClose={handleClosePriorityStatus}
        heading="Add Task Priority"
        title="Task Priority Title"
      />
    </>
  );
};

export default TaskCategoryPage;
