import { Grid } from '@mui/material';
import { theme } from '../theme';
import TopHeading from '../components/ui/TopHeading';
import OneFieldForm from '../components/ui/OneFieldForm';

const AddCategoryPage = () => {
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
          <OneFieldForm title="Category Name" buttonText="Create" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddCategoryPage;
