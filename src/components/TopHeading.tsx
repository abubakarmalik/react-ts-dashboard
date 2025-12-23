import {
  Box,
  Grid,
  Typography,
  Link as MuiLink,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
interface TopHeadingProps {
  heading: string;
  link: boolean;
  back: string;
  barLength: string;
}

const TopHeading = ({ heading, back, link, barLength }: TopHeadingProps) => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'row' },
        gap: 1,
        padding: 2,
      }}
    >
      <Box sx={{}}>
        <Typography
          component="p"
          sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '600' }}
        >
          {heading}
        </Typography>
        <Box
          component="div"
          sx={{
            height: '3px',
            width: barLength,
            bgcolor: theme.palette.secondary.main,
          }}
        ></Box>
      </Box>
      <Typography component="p">
        {link && (
          <MuiLink
            component={Link}
            to={back}
            underline="hover"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '14px' },
              fontWeight: '600',
            }}
          >
            Go Back
          </MuiLink>
        )}
      </Typography>
    </Grid>
  );
};

export default TopHeading;
