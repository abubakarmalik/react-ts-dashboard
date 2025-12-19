import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from '../../theme';
import { Box } from '@mui/material';
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';

export default function AccordionUsage() {
  return (
    <>
      <Accordion
        defaultExpanded
        sx={{
          '&.MuiAccordion-root': { bgcolor: theme.palette.background.default },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box
            component="div"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '600' }}
            >
              Account Information
            </Typography>
            <Box
              component="div"
              sx={{
                height: '3px',
                width: '100px',
                bgcolor: theme.palette.secondary.main,
              }}
            ></Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <AccountInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          '&.MuiAccordion-root': { bgcolor: theme.palette.background.default },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box
            component="div"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '600' }}
            >
              Change Password
            </Typography>
            <Box
              component="div"
              sx={{
                height: '3px',
                width: '100px',
                bgcolor: theme.palette.secondary.main,
              }}
            ></Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ChangePassword />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
