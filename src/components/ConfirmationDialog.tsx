import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ConfirmationDialogPropsType {
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
}

const ConfirmationDialog = ({
  onClose,
  onConfirm,
  open,
}: ConfirmationDialogPropsType) => {
  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      slotProps={{
        paper: {
          sx: { borderRadius: 4 },
        },
      }}
    >
      <DialogTitle>{'Are you want to delete this item?'}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
