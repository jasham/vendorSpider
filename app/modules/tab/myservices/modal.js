import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { array, bool, func, string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Text from '../../../components/text';
import DropDown from '../../../components/dropdown';

const useStyles = makeStyles({
  ddownWidth: {
    width: '100%',
  },
});
const AlertDialog = ({
  modalTitle,
  requestLabel,
  modalStatus,
  makeFalseModal,
  serviceList,
  retSelVal,
}) => {
  const classes = useStyles();
  const [selectedValue, setselectedValue] = React.useState();
  const onClickRequest = () => {
    makeFalseModal();
    retSelVal(selectedValue);
  };
  const onSelectDVal = (val) => {
    setselectedValue(val);
  };
  return (
    <div>
      <Dialog
        open={modalStatus}
        onClose={onClickRequest}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DropDown
            className={classes.ddownWidth}
            label="Order Status"
            options={serviceList.map((item) => ({
              label: item.label,
              value: item.id,
              group_id: item.group_id,
            }))}
            onChange={onSelectDVal}
            selectedValue={selectedValue}
            // className={classes.dropdown}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickRequest} color="primary">
            <Text component="body1" fWeight={500}>
              {requestLabel}
            </Text>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  modalTitle: string,
  requestLabel: string,
  makeFalseModal: func,
  modalStatus: bool,
  serviceList: array,
  retSelVal: func,
};

export default AlertDialog;
