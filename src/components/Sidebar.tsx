import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Drawer,
} from '@mui/material';
import { useState } from 'react';
import ellipse from '../assets/images/Ellipse.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { theme } from '../theme';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  to: string;
}

interface SidebarProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const SidebarContent = ({
  activeMenu,
  setActiveMenu,
  isDrawer = false,
  handleLogoutbtn,
}: any) => {
  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />,
      to: '/',
    },
    {
      id: 'vital-task',
      label: 'Vital Task',
      icon: (
        <PriorityHighIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />
      ),
      to: '/vital-task',
    },
    {
      id: 'my-task',
      label: 'My Task',
      icon: (
        <CheckCircleIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />
      ),
      to: '/my-task',
    },
    {
      id: 'task-categories',
      label: 'Task Categories',
      icon: <AssignmentIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />,
      to: '/task-categories',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />,
      to: '/settings',
    },
    {
      id: 'help',
      label: 'Help',
      icon: <HelpIcon sx={{ fontSize: { xs: 'medium', lg: 'large' } }} />,
      to: '/helps',
    },
  ];

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Top Section - White Background */}
      <Box
        sx={{
          bgcolor: 'background.default',
          height: '60px',
          position: 'relative',
        }}
      >
        {/* Avatar positioned to overlap both sections */}
        <Avatar
          sx={{
            width: 80,
            height: 80,
            border: '4px solid white',
            boxShadow: 3,
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
          src={ellipse}
          alt="Sundar Gurung"
        />
      </Box>

      {/* Bottom Section - Primary Color Background */}
      <Box
        sx={{
          background: theme.palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          flex: 1,
          pt: '50px',
          px: 2,
          pb: 2,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '3px',
          },
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '5px',
              fontSize: { xs: '16px', sm: '18px' },
            }}
          >
            Sundar Gurung
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontSize: { xs: '12px', sm: '13px' },
              textAlign: 'center',
              px: 1,
            }}
          >
            sundargurug360@gmail.com
          </Typography>
        </Box>

        {/* Menu Items */}
        <List sx={{ flex: 1, paddingTop: 0 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                marginBottom: '8px',
              }}
              component={Link}
              to={item.to}
            >
              <ListItemButton
                onClick={() => setActiveMenu(item.to)}
                sx={{
                  backgroundColor:
                    activeMenu === item.to
                      ? 'rgba(255, 255, 255, 0.95)'
                      : 'transparent',
                  color:
                    activeMenu === item.to
                      ? theme.palette.primary.main
                      : 'white',
                  borderRadius: '12px',
                  py: 1.5,
                  px: 2,
                  '&:hover': {
                    backgroundColor:
                      activeMenu === item.to
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeMenu === item.to
                        ? theme.palette.primary.main
                        : 'white',
                    minWidth: '40px',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: activeMenu === item.to ? '600' : '500',
                      fontSize: { xs: '14px', sm: '15px' },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Logout Button */}
        <Button
          fullWidth
          onClick={handleLogoutbtn}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'white',
            textTransform: 'none',
            fontSize: { xs: '14px', sm: '16px' },
            padding: '12px 16px',
            borderRadius: '12px',
            mt: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            transition: 'all 0.3s ease',
          }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

const Sidebar = ({ open, toggleDrawer }: SidebarProps) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const navigate = useNavigate();
  const handleLogoutbtn = () => {
    navigate('/auth/signin');
  };

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: 260, sm: 300 },
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          sx={{ height: '100%' }}
        >
          <SidebarContent
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isDrawer={true}
          />
        </Box>
      </Drawer>

      {/* Desktop Fixed Sidebar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          top: 64, // Height of AppBar
          left: 0,
          width: '25%', // 3/12 grid = 25%
          height: 'calc(100vh - 64px)',
          bgcolor: 'background.paper',
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        <SidebarContent
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          handleLogoutbtn={handleLogoutbtn}
        />
      </Box>
    </>
  );
};

export default Sidebar;
