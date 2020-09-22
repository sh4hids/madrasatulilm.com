import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import SummaryCard from './SummaryCard';
import Text from './Text';

import Hash from '../assets/icons/hash.svg';

const ColoredHash = styled(Hash)`
  position: relative;
  top: -2px;

  path {
    stroke: ${({ theme }) => theme.colors.primary3};
  }
`;

const BookList = ({ books = [], showAllTagsButton = false }) => {
  return (
    <Flex mx={[0, -2]} flexWrap="wrap">
      {books.map(
        (book, index) =>
        index < 6 && (
          <Box key={book.title} width={[1, 1 / 3]} px={3} py={3}>
            <SummaryCard height={320}>
              <div>
                <Text variant="h3">{book.title}</Text>

                <a href={book.link} target="_blank" rel="noreferrer noopener">
                  <Button variant="primary">ডাউনলোড</Button>
                </a>
              </div>
            </SummaryCard>
          </Box>
        )
      )}
    </Flex>
  );
};

export default BookList;
