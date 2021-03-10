import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../pages/_app';
import { ALERT_DIALOG } from '../../lib/utility/type';

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
  const { title, description } = props;
  const globalContext = useContext(GlobalContext);
  const handleClose = () => {
    globalContext.allDispatch({
      type: ALERT_DIALOG,
      value: false,
    });
  };

  return (
    <div>
      <Dialog
        open={globalContext.state.alertStatus || false}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
DraggableDialog.default = {
  title: '',
  description: '',
};

DraggableDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DraggableDialog;
