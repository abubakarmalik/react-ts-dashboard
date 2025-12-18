import { Box, Button, Grid } from '@mui/material';
import { theme } from '../theme';
import TopHeading from '../components/ui/TopHeading';
import TableComponent from '../components/ui/TableComponent';

const TaskCategoryPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid
        size={{ xs: 12 }}
        sx={{
          height: { xs: 'auto', sm: 'auto', md: 'auto' },
          bgcolor: theme.palette.background.default,
          boxShadow: 4,
          borderRadius: 4,
        }}
      >
        <TopHeading
          heading="Task Categories"
          back="#"
          link={true}
          barLength="50px"
        />
        <Box component="div" sx={{ padding: 2 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              fontSize: { xs: 10, sm: 12, md: 14 },
              background: theme.palette.secondary.main,
              color: theme.palette.background.default,
              width: { xs: 'auto' },
            }}
          >
            Add Category
          </Button>
        </Box>
        <TableComponent
          heading="Task Staus"
          buttonAction={() => {}}
          buttonText="Ass Task Status"
          list={[]}
        />
      </Grid>
    </Grid>
  );
};

export default TaskCategoryPage;
