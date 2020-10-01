import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../views/layouts';
import PostListing from '../components/PostListing';
import { Box, SectionTitle, SEO, NoticeBox, Text } from '../views/components';
import config from '../../data/SiteConfig';

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const { tags } = data.allMarkdownRemark;

  return (
    <MainLayout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Box maxWidth={960} margin="0 auto">
        <SectionTitle title="সাম্প্রতিক লেখা" />
        <PostListing postEdges={postEdges} limit={6} showAllPostButton />
      </Box>
    </MainLayout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
      tags: group(field: frontmatter___tags) {
        title: fieldValue
        totalCount
      }
    }
  }
`;
