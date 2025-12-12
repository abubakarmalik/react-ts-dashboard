import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SidebarDrawer from '../components/SidebarDrawer';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <SidebarDrawer open={open} toggleDrawer={toggleDrawer} />
      <Grid container spacing={2}>
        <Grid size={{ xl: 2, lg: 2, md: 2, sm: 0, xs: 0 }}>
          <Sidebar />
        </Grid>
        <Grid size={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }}>
          <Container>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
