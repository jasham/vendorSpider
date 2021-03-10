import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../app/components/layout';
import ServicePage from '../app/modules/servicePage';

const Services = (props) => {
  const { query } = props;
  return (
    <Layout query={query}>
      <ServicePage query={query} bannerImage="/static/images/car4.png" />
    </Layout>
  );
};

export async function getServerSideProps(res) {
  const { query } = res;
  return { props: { query } };
}

Services.propTypes = {
  query: PropTypes.oneOfType([PropTypes.any]),
};
export default Services;
