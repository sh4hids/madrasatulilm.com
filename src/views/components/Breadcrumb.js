import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const BreacrumbContainer = styled.ul`
  font-size: 0.8rem;
  margin: 16px 0;
  text-align: center;

  span {
    display: inline-block;
    margin: 0 8px;
  }
`;

const BreacrumbLink = styled(Link)``;

const BreacrumbLinkActive = styled.p`
  display: inline;
`;

const Breadcrumb = ({ links = [] }) => {
  return (
    <BreacrumbContainer>
      {links.map((link, index) => (
        <>
          {!link.isCurrentPage ? (
            <BreacrumbLink to={link.url}>{link.name}</BreacrumbLink>
          ) : (
            <BreacrumbLinkActive>{link.name}</BreacrumbLinkActive>
          )}
          {index < links.length - 1 && <span>></span>}
        </>
      ))}
    </BreacrumbContainer>
  );
};

export default Breadcrumb;
