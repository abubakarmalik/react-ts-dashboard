import { Box, useTheme } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircleIcon from '@mui/icons-material/Circle';

interface ProgressBarPropsType {
  percentage: number;
  color: string;
  status: string;
}

const ProgressBar = ({ percentage, color, status }: ProgressBarPropsType) => {
  const theme = useTheme();
  return (
    <Box component="div" sx={{ textAlign: 'center', p: 2 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: theme.palette.text.primary,
          pathColor: color,
        })}
      />
      <Box
        component="p"
        sx={{ color: color, fontSize: { xs: 12, sm: 14, md: 16 } }}
      >
        <CircleIcon sx={{ fontSize: '8px' }} /> {status}
      </Box>
    </Box>
  );
};

export default ProgressBar;
