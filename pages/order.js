import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../app/components/layout';
import Order from '../app/modules/order';

const Orders = (props) => {
  const { query } = props;
  return (
    <Layout query={query}>
      <Order query={query} />
    </Layout>
  );
};

export async function getServerSideProps(res) {
  const { query } = res;
  return { props: { query } };
}

Orders.propTypes = {
  query: PropTypes.oneOfType([PropTypes.any]),
};

export default Orders;
