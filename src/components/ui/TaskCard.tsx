import { Box, Typography } from '@mui/material';
import { theme } from '../../theme';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface TaskCardProps {
  heading: string;
  paragraph: string;
  img: string;
  priority: boolean;
  priorityColor: string;
  status: string;
  statusColor: string;
  disabledText: string;
}

const TaskCard = ({
  heading,
  paragraph,
  img,
  priority,
  priorityColor,
  status,
  statusColor,
  disabledText,
}: TaskCardProps) => {
  return (
    <Box
      component="div"
      sx={{
        border: '1px solid #cacaca',
        borderRadius: 3,
        padding: 1,
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box component="div" sx={{ display: 'flex' }}>
          <CircleOutlinedIcon
            sx={{
              color: statusColor,
              fontSize: '18px',
              paddingRight: 1,
            }}
          />
          <Typography
            component="p"
            sx={{
              color: theme.palette.text.primary,
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: 1.5,
            }}
          >
            {heading}
          </Typography>
        </Box>
        <MoreHorizIcon sx={{ color: theme.palette.text.disabled }} />
      </Box>

      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: 1,
          paddingX: 2,
        }}
      >
        <Box>
          <Typography
            component="p"
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              color: theme.palette.text.disabled,
            }}
          >
            {paragraph}
          </Typography>
          {!priority && (
            <Box sx={{mt: 1}}>
              <Typography
                component="p"
                sx={{ fontSize: '10px', fontWeight: '400' }}
              >
                Status:&nbsp;
                <Box component="span" sx={{ color: statusColor }}>
                  {status}
                </Box>
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: theme.palette.text.disabled,
                }}
              >
                {disabledText}
              </Typography>
            </Box>
          )}
        </Box>
        <Box>
          <Box component="img" src={img} alt="card image" />
        </Box>
      </Box>
      {priority && (
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: 2,
            flexFlow: 'wrap',
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: '10px', fontWeight: '400' }}
          >
            Priority:&nbsp;
            <Box component="span" sx={{ color: priorityColor }}>
              Moderate
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: '10px', fontWeight: '400' }}
          >
            Status:&nbsp;
            <Box component="span" sx={{ color: statusColor }}>
              {status}
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: '10px',
              fontWeight: '400',
              color: theme.palette.text.disabled,
            }}
          >
            {disabledText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TaskCard;
