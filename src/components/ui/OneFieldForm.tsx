import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

interface OneFieldFormPropsType {
  title: string;
  buttonText: string;
  radio: boolean;
}

const OneFieldForm = ({ title, buttonText, radio }: OneFieldFormPropsType) => {
  const theme = useTheme();
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
      {radio && (
        <>
          <Typography
            component="p"
            sx={{
              fontWeight: '600',
              fontSize: { xs: '12px', sm: '14px' },
              ml: 1,
              mt: 1,
            }}
          >
            Status
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio color="secondary" />}
              label="Draft"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="secondary" />}
              label="Publish"
            />
          </RadioGroup>
        </>
      )}

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
