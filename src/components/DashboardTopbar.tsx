import { Box, Button, Grid, Typography } from '@mui/material';
import group1 from '../assets/images/group1.png';
import group2 from '../assets/images/group2.png';
import group3 from '../assets/images/group3.png';
import group4 from '../assets/images/group4.png';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

interface DashboardTopbarType {
  handleOpen: () => void;
}

const DashboardTopbar = ({ handleOpen }: DashboardTopbarType) => {
  return (
    <>
      <Grid
        container
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        spacing={{ xs: 1, sm: 2 }}
      >
        <Grid size={{}}>
          <Typography
            component="h3"
            sx={{
              fontWeight: '500',
              fontSize: { sm: '20px', md: '22px', lg: '26px' },
            }}
          >
            Welcome back, Sundar 👋
          </Typography>
        </Grid>
        <Grid>
          <Box display="flex" gap={1} justifyContent="right">
            <Box
              component="img"
              alt="group img"
              src={group1}
              sx={{ height: { xs: 30, md: 35, lg: 40 } }}
            />
            <Box
              component="img"
              alt="group img"
              src={group2}
              sx={{ height: { xs: 30, md: 35, lg: 40 } }}
            />
            <Box
              component="img"
              alt="group img"
              src={group3}
              sx={{ height: { xs: 30, md: 35, lg: 40 } }}
            />
            <Box
              component="img"
              alt="group img"
              src={group4}
              sx={{ height: { xs: 30, md: 35, lg: 40 } }}
            />
            <Button
              variant="outlined"
              onClick={() => handleOpen()}
              sx={{
                borderRadius: 2,
                paddingRight: { xs: 1, lg: 2 },
                paddingLeft: { xs: 2, lg: 3 },
                ml: { xs: 1, lg: 2 },
                width: 'auto',
                fontWeight: '700',
                fontSize: { xs: '10px', lg: '14px' },
              }}
              startIcon={<GroupAddIcon />}
            >
              Invite
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardTopbar;
