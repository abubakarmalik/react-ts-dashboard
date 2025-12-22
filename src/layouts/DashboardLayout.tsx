import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(!open);
  };

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
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
