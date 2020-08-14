import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';
import { convertNumbers } from 'bn-number-utils';
import { MainLayout } from '../../layouts';
import { SEO, Text } from '../../components';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <MainLayout variant="fixed">
    <SEO pageTitle="ট্যাগসমূহ" />
    <Text variant="h4">
      {`ট্যাগসমূহ (${convertNumbers(group.length)}
টি)`}
    </Text>
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {`${tag.fieldValue} (${convertNumbers(tag.totalCount)} টি লেখা)`}
          </Link>
        </li>
      ))}
    </ul>
  </MainLayout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
