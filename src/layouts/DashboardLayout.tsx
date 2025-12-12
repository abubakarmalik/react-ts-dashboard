import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default DashboardLayout;
