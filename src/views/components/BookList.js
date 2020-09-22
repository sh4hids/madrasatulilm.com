import React from 'react';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import SummaryCard from './SummaryCard';
import Text from './Text';

const BookList = ({ books = [] }) => {
  return (
    <Flex mx={[0, -2]} flexWrap="wrap" mt={4}>
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
