import {
  Box,
  Button,
  Grid,
  useTheme,
  BottomNavigationAction,
  BottomNavigation,
} from '@mui/material';
import TopHeading from '../components/TopHeading';
import TableComponent from '../components/TableComponent';
import { useNavigate } from 'react-router-dom';
import { useState, type SyntheticEvent } from 'react';
import StatusModel from '../components/StatusModel';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import MrtBasic from '../components/MrtBasic';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditingMrtComponent from '../components/EditingMrtComponent';

const TaskCategoryPage = () => {
  const theme = useTheme();
  const [openTaskStatus, setOpenTaskStatus] = useState<boolean>(false);
  const handleOpenTaskStatus = () => setOpenTaskStatus(true);
  const handleCloseTaskStatus = () => setOpenTaskStatus(false);
  const [openPriorityStatus, setOpenPriorityStatus] = useState<boolean>(false);
  const handleOpenPriorityStatus = () => setOpenPriorityStatus(true);
  const handleClosePriorityStatus = () => setOpenPriorityStatus(false);
  const [value, setValue] = useState('status');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleAddCategoryButton = () => {
    navigate('/task-categories/add');
  };
  return (
    <>
      <Grid container spacing={1} sx={{ mt: 1 }}>
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
          {value === 'status' && (
            <TableComponent
              heading="Task Status"
              buttonAction={handleOpenTaskStatus}
              editAction={handleOpenTaskStatus}
              buttonText="Add Task Status"
              list={['Completed', 'In Progress', 'Not Started']}
            />
          )}

          {value === 'priority' && (
            <TableComponent
              heading="Task Priority"
              buttonAction={handleOpenPriorityStatus}
              editAction={handleOpenPriorityStatus}
              buttonText="Add New Priority"
              list={['Extreme', 'Low', 'High']}
            />
          )}
          {value === 'basic' && <MrtBasic />}
          {value === 'editing' && <EditingMrtComponent />}

          <BottomNavigation
            sx={{ width: '100%' }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Status"
              value="status"
              icon={<AssignmentOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Priority"
              value="priority"
              icon={<PriorityHighOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Basic"
              value="basic"
              icon={<WebAssetOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Editing"
              value="editing"
              icon={<EditCalendarIcon />}
            />
          </BottomNavigation>
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
