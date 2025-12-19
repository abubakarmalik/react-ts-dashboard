import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { theme } from '../../theme';

interface OneFieldFormPropsType {
  title: string;
  buttonText: string;
}

const OneFieldForm = ({ title, buttonText }: OneFieldFormPropsType) => {
  return (
    <Box component="div">
      <Typography
        component="p"
        sx={{
          fontWeight: '600',
          mb: 1,
          fontSize: { xs: '12px', sm: '14px' },
          ml: 1,
        }}
      >
        {title}
      </Typography>
      <TextField
        label=""
        id="fullWidth"
        type="text"
        placeholder=""
        required
        autoFocus
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            width: { xs: 220, sm: 400, md: 500 },
            height: { xs: 40 },
            color: theme.palette.text.primary,
          },
          '& .Mui-focused': {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.text.primary,
          },
        }}
      />
      <Grid
        container
        direction="row"
        spacing={2}
        padding={0}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          mt: 3,
          mb: 1,
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            background: theme.palette.secondary.main,
            color: theme.palette.background.default,
            width: { xs: 'auto', sm: 130 },
          }}
        >
          {buttonText}
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            background: theme.palette.secondary.main,
            color: theme.palette.background.default,
            width: { xs: 'auto', sm: 130 },
          }}
        >
          Cancel
        </Button>
      </Grid>
    </Box>
  );
};

export default OneFieldForm;
