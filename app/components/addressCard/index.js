/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Buttons from '../button';
import Text from '../text';
import { GlobalContext } from '../../../pages/_app';
import {
  SELECTED_ADDRESS_ID,
  SELECTED_ADDRESS_DATA,
} from '../../lib/utility/type';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    width: 200,
    marginBottom: 30,
  },
  addressCard: {
    padding: 20,
    borderRadius: 10,
    boxShadow:
      '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    minHeight: 200,
    marginBottom: 20,
  },
  button: {
    width: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    fontFamily: 'Poppins',
  },
  selectedButton: {
    width: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#34A76C',
    fontFamily: 'Poppins',
  },
});

const AddressCard = ({
  classes,
  onClickDiv,
  address1,
  address2,
  adderListId,
  aData,
}) => {
  const globalContext = useContext(GlobalContext);

  const onSelected = () => {
    globalContext.allDispatch({
      type: SELECTED_ADDRESS_ID,
      value: adderListId,
    });
    globalContext.allDispatch({
      type: SELECTED_ADDRESS_DATA,
      value: aData,
    });
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.addressCard}>
        <Text>{address1 || 'Add address'}</Text>
        <Text>{address2}</Text>
      </Box>
      {!address1 ? (
        <Buttons className={classes.selectedButton} onClick={onClickDiv}>
          Add Address
        </Buttons>
      ) : null}
      {address1 ? (
        adderListId === globalContext.state.selectedAddressId ? (
          <Buttons className={classes.selectedButton} onClick={onSelected}>
            Selected
          </Buttons>
        ) : (
          <Buttons className={classes.button} onClick={onSelected}>
            Select
          </Buttons>
        )
      ) : null}
    </Box>
  );
};

AddressCard.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  adderListId: PropTypes.string,
  onClickDiv: PropTypes.func,
  aData: PropTypes.object,
};

export default withStyles(styles)(AddressCard);
