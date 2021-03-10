import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../app/components/layout';
import Operations from '../app/components/operations';

const HomePage = (props) => {
  const { query } = props;
  return (
    <Layout query={query}>
      <Operations query={query} />
    </Layout>
  );
};

export async function getServerSideProps(res) {
  const { query } = res;
  return { props: { query } };
}

HomePage.propTypes = {
  query: PropTypes.oneOfType([PropTypes.any]),
};
export default HomePage;
