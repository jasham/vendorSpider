import React from 'react';
import Layout from '../app/components/layout';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import Text from '../app/components/text';

const styles = {
  root: {},
};

const Main = ({ classes }) => {
  return (
    <Layout>
      <Container>
        <Box>
          <Text variant="h6" ffamily={'Poppins'} fWeight={500}>
            Anytime
          </Text>
        </Box>
      </Container>
    </Layout>
  );
};

Main.propTypes = {
  // eslint-disable-next-line react/forb,id-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
