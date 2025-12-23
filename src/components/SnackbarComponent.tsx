import Button from '@mui/material/Button';
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface SnackbarComponentPropsType {
  open: boolean;
  onClose: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
}

export default function SnackbarComponent({
  open,
  onClose,
}: SnackbarComponentPropsType) {
  const action = (
    <>
      <Button color="secondary" size="small" onClick={onClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message="Item Deleted"
        action={action}
      />
    </>
  );
}
