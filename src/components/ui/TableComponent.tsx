import {
  Box,
  Typography,
  Link,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { theme } from '../../theme';
import AddIcon from '@mui/icons-material/Add';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteIcon from '@mui/icons-material/Delete';

interface TablePropsTypes {
  heading: string;
  buttonAction: () => void;
  buttonText: string;
  list: string[];
}

const TableComponent = ({
  heading,
  buttonAction,
  buttonText,
  list,
}: TablePropsTypes) => {
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'row' },
          padding: 2,
        }}
      >
        <Box component="div">
          <Typography
            component="p"
            sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: '600' }}
          >
            {heading}
          </Typography>
          <Box
            component="div"
            sx={{
              height: '3px',
              width: '40px',
              bgcolor: theme.palette.secondary.main,
            }}
          ></Box>
        </Box>
        <Button
          variant="text"
          startIcon={<AddIcon sx={{ color: theme.palette.secondary.main }} />}
          sx={{ color: theme.palette.text.disabled }}
        >
          {buttonText}
        </Button>
      </Grid>
      <Table
        sx={{ overflowX: 'scroll', scrollBehavior: 'auto' }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow hover>
            <TableCell>SN</TableCell>
            <TableCell align="right">{heading}</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              1
            </TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">
              <Grid
                container
                direction="row"
                spacing={2}
                padding={0}
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  startIcon={<EditDocumentIcon />}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    background: theme.palette.secondary.main,
                    color: theme.palette.background.default,
                    width: { xs: 'auto', sm: 130 },
                  }}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;
