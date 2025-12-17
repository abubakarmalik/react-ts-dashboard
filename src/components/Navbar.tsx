import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { theme } from '../theme';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '9ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

const RoundIconBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  width: 38,
  height: 38,
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

type DrawerProps = {
  toggleDrawer: (newOpen: boolean) => () => void;
};

export default function Navbar({ toggleDrawer }: DrawerProps) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const today = new Date().toLocaleDateString('en-GB');
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <RoundIconBtn>
          <NotificationsIcon />
        </RoundIconBtn>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <RoundIconBtn>
          <CalendarMonthIcon />
        </RoundIconBtn>
        <p>Calendar</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.default',
        boxShadow: 1,
        zIndex:  1,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: 'text.secondary' }} />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', md: 'block' },
            fontSize: '22px',
            fontWeight: '600',
          }}
          color="text.secondary"
        >
          Dash
          <Box component="span" color="text.primary">
            board
          </Box>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Search>
          <StyledInputBase
            placeholder={'Search your task here'}
            inputProps={{ 'aria-label': 'search' }}
          />
          <RoundIconBtn>
            <SearchIcon />
          </RoundIconBtn>
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <RoundIconBtn sx={{ mr: 1 }}>
            <NotificationsIcon />
          </RoundIconBtn>
          <RoundIconBtn sx={{ mr: 1 }}>
            <CalendarMonthIcon />
          </RoundIconBtn>
          <Box sx={{ textAlign: 'left', marginLeft: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
              {day}
            </Typography>
            <Typography
              sx={{
                color: 'info.main',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              {today}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
}
