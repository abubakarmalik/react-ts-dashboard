import {
  Grid,
  useTheme,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import TopHeading from '../components/TopHeading';
import OneFieldForm from '../components/OneFieldForm';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link as RouterLink } from 'react-router-dom';

const AddCategoryPage = () => {
  const theme = useTheme();

  const breadcrumbs = [
    <MuiLink
      key="1"
      component={RouterLink}
      to="/"
      underline="hover"
      color="inherit"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.primary,
        fontSize: 12,
      }}
    >
      <HomeIcon
        sx={{ mr: 0.5, color: theme.palette.primary.main }}
        fontSize="inherit"
      />
      Home
    </MuiLink>,
    <MuiLink
      key="2"
      component={RouterLink}
      to="/task-categories"
      underline="hover"
      color="inherit"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.primary,
        fontSize: 12,
      }}
    >
      <CategoryIcon
        sx={{ mr: 0.5, color: theme.palette.primary.main }}
        fontSize="inherit"
      />
      Task Category
    </MuiLink>,
    <Typography
      key="3"
      sx={{
        color: 'text.primary',
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,
      }}
    >
      <AddBoxIcon
        sx={{ mr: 0.5, color: theme.palette.primary.main }}
        fontSize="inherit"
      />
      Add Category
    </Typography>,
  ];

  return (
    <Grid container spacing={1} sx={{ mt: 1 }}>
      <Grid
        size={{ xs: 12 }}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: '70vh' },
          bgcolor: theme.palette.background.default,
          boxShadow: 4,
          borderRadius: 4,
          padding: 2,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <TopHeading
          heading="Create Categories"
          back="/task-categories"
          link={true}
          barLength="40px"
        />
        <Grid
          container
          padding={2}
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            height: { xs: 'auto', sm: 'auto', md: 'auto' },
            bgcolor: theme.palette.background.default,
            borderRadius: 4,
          }}
        >
          <OneFieldForm
            title="Category Name"
            buttonText="Create"
            radio={true}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddCategoryPage;
