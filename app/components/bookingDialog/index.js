import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const DraggableDialog = (props) => {
  const { open, handleClose, children } = props;

  return (
    <div>
      <Dialog
        open={open || false}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        {children}
      </Dialog>
    </div>
  );
};

DraggableDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default DraggableDialog;
