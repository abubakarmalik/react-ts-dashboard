import { Backdrop, Box, Fab, Tooltip, useTheme } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from '../components/Sidebar';
import AddTaskModel from '../components/AddTaskModel';
import CircularProgress from '@mui/material/CircularProgress';

const DashboardLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [openBackDrop, setOpenBackDrop] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(!open);
  };

  const handleCloseBackDrop = () => {
    setOpenBackDrop(false);
  };
  const handleOpenBackDrop = () => {
    setOpenBackDrop(true);
  };

  const [openAddTask, setOpenAddTask] = useState<boolean>(false);
  const handleOpenAddTask = () => setOpenAddTask(true);
  const handleCloseAddTask = () => setOpenAddTask(false);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      {/* Fixed Navbar - Full Width */}
      <Navbar
        toggleDrawer={toggleDrawer}
        handleOpenBackDrop={handleOpenBackDrop}
      />

      {/*Sidebar - Drawer on mobile, Fixed on desktop */}
      <Sidebar
        open={open}
        toggleDrawer={toggleDrawer}
        handleOpenBackDrop={handleOpenBackDrop}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8, // Margin top for fixed navbar (64px)
          ml: { xs: 0, md: '25%' }, // Margin left for fixed sidebar (3/12 = 25%)
          width: { xs: '100%', md: '75%' }, // Content width (3/12 = 25%)
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Box sx={{ p: { xs: 1, md: 3 }, mt: 1 }}>
          <Outlet />
          <Box
            component="div"
            sx={{ position: 'fixed', bottom: 20, right: 20 }}
          >
            <Tooltip title="Add Task">
              <Fab
                size="medium"
                color="primary"
                sx={{ color: theme.palette.background.default }}
                aria-label="add"
                onClick={handleOpenAddTask}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Box>
        </Box>
        <AddTaskModel
          open={openAddTask}
          handleClose={handleCloseAddTask}
          heading="Add New Task"
        />
        <Backdrop
          sx={(theme) => ({
            color: '#fff',
            zIndex: theme.zIndex.drawer + 1,
          })}
          open={openBackDrop}
          onClick={handleCloseBackDrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
