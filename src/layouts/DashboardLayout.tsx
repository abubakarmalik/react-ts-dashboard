import { Box, Fab } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from '../components/Sidebar';
import { theme } from '../theme';
import AddTaskModel from '../components/ui/AddTaskModel';

const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(!open);
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
      <Navbar toggleDrawer={toggleDrawer} />

      {/*Sidebar - Drawer on mobile, Fixed on desktop */}
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

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
            <Fab
              size="medium"
              color="primary"
              sx={{ color: theme.palette.background.default }}
              aria-label="add"
              onClick={handleOpenAddTask}
            >
              <AddIcon />
            </Fab>
          </Box>
        </Box>
        <AddTaskModel
          open={openAddTask}
          handleClose={handleCloseAddTask}
          heading="Add New Task"
        />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
