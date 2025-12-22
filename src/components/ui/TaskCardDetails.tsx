import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
} from '@mui/material';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDocumentIcon from '@mui/icons-material/EditDocument';

interface TaskCardDetailsPropsType {
  title: string;
  priorityText: string;
  priorityColor: string;
  statusText: string;
  statusColor: string;
  disabledText: string;
  img: string;
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  p3: string;
  h4: string;
  p4: string;
  decimal: boolean;
  list1Heading: string;
  list1: string[];
  vital: boolean;
  back: boolean;
}

const RoundIconBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  width: 30,
  height: 30,
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const TaskCardDetails = ({
  title,
  priorityText,
  priorityColor,
  statusText,
  statusColor,
  img,
  disabledText,
  h1,
  p1,
  h2,
  p2,
  h3,
  p3,
  h4,
  p4,
  decimal,
  list1Heading,
  list1,
  back,
  vital,
}: TaskCardDetailsPropsType) => {
  const theme = useTheme();
  return (
    <Box>
      {/* Top Card Head */}
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}
      >
        <Box
          component="img"
          src={img}
          alt="task image"
          sx={{
            height: { xs: 100, sm: 120, md: 150 },
            width: { xs: 100, sm: 120, md: 150 },
          }}
        />
        <Box component="div">
          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: '10px',
                sm: '12px',
                md: '14px',
                lg: '16px',
              },
              fontWeight: '600',
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              fontWeight: '400',
              mb: 1,
            }}
          >
            Priority:&nbsp;
            <Box component="span" sx={{ color: priorityColor }}>
              {priorityText}
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              fontWeight: '400',
              mb: 1,
            }}
          >
            Status:&nbsp;
            <Box component="span" sx={{ color: statusColor }}>
              {statusText}
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              fontWeight: '400',
              color: theme.palette.text.disabled,
              mb: 1,
            }}
          >
            {disabledText}
          </Typography>
        </Box>
      </Grid>
      {/* Body */}
      <Grid container direction="column" spacing={2} sx={{ mt: 4 }}>
        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: '10px',
              sm: '12px',
              md: '14px',
              lg: '16px',
            },
            fontWeight: '400',
            color: theme.palette.text.disabled,
            mb: 0,
          }}
        >
          {h1 && (
            <Typography
              component="span"
              sx={{
                fontWeight: '700',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                },
              }}
            >
              {h1}&nbsp;
            </Typography>
          )}

          {p1}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: '10px',
              sm: '12px',
              md: '14px',
              lg: '16px',
            },
            fontWeight: '400',
            color: theme.palette.text.disabled,
            mb: 1,
          }}
        >
          {h2 && (
            <Typography
              component="span"
              sx={{
                fontWeight: '700',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                },
              }}
            >
              {h2}&nbsp;
            </Typography>
          )}
          {p2}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: '10px',
              sm: '12px',
              md: '14px',
              lg: '16px',
            },
            fontWeight: '400',
            color: theme.palette.text.disabled,
            mb: 1,
          }}
        >
          {h3 && (
            <Typography
              component="span"
              sx={{
                fontWeight: '700',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                },
              }}
            >
              {h3}&nbsp;
            </Typography>
          )}
          {p3}
        </Typography>
        <Box component="div">
          {list1Heading && (
            <Typography
              component="p"
              sx={{
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                },
                fontWeight: '400',
                color: theme.palette.text.disabled,
                mb: 1,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: '700',
                  fontSize: {
                    xs: '10px',
                    sm: '12px',
                    md: '14px',
                    lg: '16px',
                  },
                }}
              >
                {list1Heading}&nbsp;
              </Typography>
            </Typography>
          )}
          <List
            sx={{
              listStyle: decimal ? 'decimal' : 'disc',
              pl: 4,
              fontSize: {
                xs: '10px',
                sm: '12px',
                md: '14px',
                lg: '16px',
              },
            }}
          >
            {list1.map((item) => {
              return (
                <ListItem
                  key={item}
                  sx={{
                    display: 'list-item',
                    color: theme.palette.text.disabled,
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      m: 0,
                    }}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: {
                            xs: '10px',
                            sm: '12px',
                            md: '14px',
                            lg: '16px',
                          },
                          lineHeight: 1,
                        },
                      },
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        {h4 && (
          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: '10px',
                sm: '12px',
                md: '14px',
                lg: '16px',
              },
              fontWeight: '400',
              color: theme.palette.text.disabled,
              mb: 1,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: '700',
                fontSize: {
                  xs: '10px',
                  sm: '12px',
                  md: '14px',
                  lg: '16px',
                },
              }}
            >
              {h4}&nbsp;
            </Typography>
            {p4}
          </Typography>
        )}
      </Grid>
      {/* actions buttons */}
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          mt: 8,
        }}
      >
        <RoundIconBtn sx={{ mr: 1 }}>
          <DeleteIcon />
        </RoundIconBtn>
        <RoundIconBtn sx={{ mr: 1 }}>
          <EditDocumentIcon />
        </RoundIconBtn>
      </Grid>
    </Box>
  );
};

export default TaskCardDetails;
