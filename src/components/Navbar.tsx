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
import { useTheme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Chip, Divider, FormControlLabel, Switch } from '@mui/material';
import { useThemeMode } from '../context/ThemeModeContext';
import { useNavigate } from 'react-router-dom';

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
      width: '7ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30ch',
    },
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
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
  handleOpenBackDrop: () => void;
};

export default function Navbar({
  toggleDrawer,
  handleOpenBackDrop,
}: DrawerProps) {
  const theme = useTheme();
  const { mode, toggleMode } = useThemeMode();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const today = new Date().toLocaleDateString('en-GB');
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();
  const handleLogoutbtn = () => {
    handleOpenBackDrop();
    setTimeout(() => {
      navigate('/auth/signin');
    }, 2000);
  };

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
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{}}
              onChange={toggleMode}
              checked={mode === 'dark'}
            />
          }
          label=""
        />
        <Typography component="p">Theme Switch</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <RoundIconBtn>
          <NotificationsIcon />
        </RoundIconBtn>
        <Typography component="p" sx={{ ml: 1 }}>
          Notifications
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <RoundIconBtn>
          <CalendarMonthIcon />
        </RoundIconBtn>
        <Typography component="p" sx={{ ml: 1 }}>
          Calendar
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogoutbtn}>
        <RoundIconBtn>
          <LogoutIcon />
        </RoundIconBtn>
        <Typography component="p" sx={{ ml: 1 }}>
          Logout
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.default',
        boxShadow: 1,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* LEFT BOX */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
        </Box>

        {/* CENTER BOX - Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Search>
            <StyledInputBase
              placeholder={'Search your task here'}
              inputProps={{ 'aria-label': 'search' }}
            />
            <RoundIconBtn>
              <SearchIcon />
            </RoundIconBtn>
          </Search>
        </Box>

        {/* RIGHT BOX */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  onChange={toggleMode}
                  checked={mode === 'dark'}
                />
              }
              label=""
            />
          </Box>

          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            <RoundIconBtn sx={{ mr: 1 }}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
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

          <Chip
            deleteIcon={<LogoutIcon />}
            label="Logout"
            variant="outlined"
            sx={{
              ml: 2,
              cursor: 'pointer',
              padding: 1,
              display: { xs: 'none', md: 'flex' },
            }}
            onDelete={handleLogoutbtn}
            onClick={handleLogoutbtn}
          />

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
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
}
