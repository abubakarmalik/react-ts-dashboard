import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ellipse from '../assets/images/Ellipse.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Button, Typography } from '@mui/material';
import { theme } from '../theme';
import { useState } from 'react';

type DrawerProps = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
};

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function SidebarDrawer({ open, toggleDrawer }: DrawerProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'vital-task', label: 'Vital Task', icon: <PriorityHighIcon /> },
    { id: 'my-task', label: 'My Task', icon: <CheckCircleIcon /> },
    {
      id: 'task-categories',
      label: 'Task Categories',
      icon: <AssignmentIcon />,
    },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    { id: 'help', label: 'Help', icon: <HelpIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          background: theme.palette.primary.main,
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              marginBottom: '15px',
              border: '2px solid white',
            }}
            src={ellipse}
            alt="Sundar Gurung"
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', marginBottom: '5px' }}
          >
            Sundar Gurung
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
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
                marginBottom: '15px',
                backgroundColor:
                  activeMenu === item.id
                    ? 'rgba(255, 255, 255, 0.25)'
                    : 'transparent',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <ListItemButton
                onClick={() => setActiveMenu(item.id)}
                sx={{
                  backgroundColor:
                    activeMenu === item.id
                      ? 'rgba(255, 255, 255, 0.9)'
                      : 'transparent',
                  color:
                    activeMenu === item.id
                      ? theme.palette.primary.main
                      : 'white',
                  borderRadius: '12px',
                  '&:hover': {
                    backgroundColor:
                      activeMenu === item.id
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(255, 255, 255, 0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeMenu === item.id
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
                      fontWeight: activeMenu === item.id ? '600' : '500',
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
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'white',
            textTransform: 'none',
            fontSize: '16px',
            padding: '12px 16px',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
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

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
