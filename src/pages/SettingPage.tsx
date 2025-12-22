import { Grid, useTheme } from '@mui/material';
import AccordionUsage from '../components/ui/AccordionUsage';

const SettingPage = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid
        size={{ xs: 12 }}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: 'auto' },
          bgcolor: theme.palette.background.default,
          boxShadow: 4,
          borderRadius: 4,
        }}
      >
        <AccordionUsage />
      </Grid>
    </Grid>
  );
};

export default SettingPage;
