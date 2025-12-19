import {
  Box,
  Typography,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '../../theme';

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
    <Box>
      {/* Top header */}
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          px: 2,
          py: 1.5,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: { xs: 12, sm: 14 }, fontWeight: 700 }}>
            {heading}
          </Typography>
          <Box
            sx={{ height: 3, width: 40, bgcolor: 'secondary.main', mt: 0.5 }}
          />
        </Box>

        <Button
          onClick={buttonAction}
          variant="text"
          startIcon={<AddIcon />}
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            '& .MuiButton-startIcon': { color: 'secondary.main' },
          }}
        >
          {buttonText}
        </Button>
      </Grid>
      <Box component="div" sx={{ padding: 4 }}>
        {/* Table wrapper (THIS controls scroll on xs) */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            padding: 0,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: theme.palette.background.default,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Table
            aria-label="task table"
            sx={{
              minWidth: 640,
              borderCollapse: 'collapse',
              borderSpacing: 0,
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    fontWeight: 700,
                    bgcolor: theme.palette.background.default,
                    borderBottom: '1px solid',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    py: 2,
                  },
                  '& th:last-child': {
                    borderRight: 'none',
                  },
                }}
              >
                <TableCell align="center" sx={{ width: 80 }}>
                  SN
                </TableCell>
                <TableCell align="center">{heading}</TableCell>
                <TableCell align="center" sx={{ width: 280 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                '& td': {
                  bgcolor: theme.palette.background.default,
                  borderBottom: '1px solid',
                  borderRight: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  py: 2.2,
                },
                '& td:last-child': {
                  borderRight: 'none',
                },
                '& tr:last-child td': {
                  borderBottom: 'none', // clean bottom
                },
              }}
            >
              {list.map((status, idx) => (
                <TableRow key={`${status}-${idx}`} hover>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    {idx + 1}
                  </TableCell>

                  <TableCell align="center" sx={{ fontWeight: 500 }}>
                    {status}
                  </TableCell>

                  <TableCell align="center">
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                      sx={{ flexWrap: 'nowrap' }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<EditDocumentIcon />}
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'common.white',
                          borderRadius: 2,
                          px: 2.2,
                          minWidth: 110,
                          height: 40,
                          textTransform: 'none',
                          fontWeight: 700,
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: 'secondary.dark',
                            boxShadow: 'none',
                          },
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'common.white',
                          borderRadius: 2,
                          px: 2.2,
                          minWidth: 110,
                          height: 40,
                          textTransform: 'none',
                          fontWeight: 700,
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: 'secondary.dark',
                            boxShadow: 'none',
                          },
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableComponent;
