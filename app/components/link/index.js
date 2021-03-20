import React, { forwardRef } from 'react';
import Link from 'next/link';
import { Link as MaterialLink } from '@material-ui/core';
import { string, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const UnstyleLink = withStyles({
  root: () => ({
    color: '#A7A7A7',
    fontSize: '13px',
    fontWeight: '300',
    paddingBottom: '1px',
    fontFamily: 'Poppins',
    borderBottom: '2px solid #FFFFFF',
    '&:hover': {
      textDecoration: 'none !important',
      borderBottom: '2px solid #34a76c',
      color: '#34a76c',
    },
  }),
})(MaterialLink);
const Links = forwardRef(({ children, className, href, onClick }, ref) => (
  <Link href={href} passHref style={{ fontFamily: 'Poppins' }}>
    <UnstyleLink
      component="a"
      className={className}
      onClick={onClick}
      rel="noopener noreferrer"
      ref={ref}
    >
      {children}
    </UnstyleLink>
  </Link>
));
Links.propTypes = {
  href: string,
  onClick: func,
};

export default Links;
