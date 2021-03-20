import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import Layout from '../app/components/layout';
import Text from '../app/components/text';

const styles = {
  root: {},
};

const Main = () => (
  <Layout>
    <Container>
      <Box>
        <Text variant="h6" ffamily="Poppins" fWeight={500}>
          Anytime
        </Text>
      </Box>
    </Container>
  </Layout>
);

export default withStyles(styles)(Main);
