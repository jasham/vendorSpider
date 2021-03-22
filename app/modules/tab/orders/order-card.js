import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import React from 'react';

const OrderCard = () => (
  <Card variant="outlined" style={{ marginTop: '10px' }}>
    <CardContent>
      <Typography component="p" variant="h5" style={{ color: '#34A76C' }}>
        <b> Order No:</b>
        <Typography component="span" style={{ color: 'black' }}>
          193893275
        </Typography>
      </Typography>
      <Box width="100%">
        <Typography style={{ color: 'rgba(0,0,0,0.3)' }}>
          <b>Mechanic</b>
        </Typography>
        <Typography>
          loerum kmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </Typography>
        <Typography style={{ color: 'rgba(0,0,0,0.3)', whiteSpace: 'no-wrap' }}>
          <b> Distance:</b>
          <Typography
            style={{ marginLeft: '10px', color: 'black' }}
            component="span"
            variant="body2"
          >
            20KM
          </Typography>
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      <Typography
        variant="body2"
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        align="right"
      >
        <b>InProcess</b>
      </Typography>
    </CardActions>
  </Card>
);

export default OrderCard;
