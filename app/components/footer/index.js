import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#34A76C',
    height: 50,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item />
        </Grid>
      </Container>
    </Box>
  );
};

export default MenuAppBar;
