import React from 'react';
import { Link } from 'gatsby';
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
              <SummaryCard height={[320, 320, 400]}>
                <div>
                  <Text variant="h3">{book.title}</Text>

                  <Link to={`${book.link}/`}>
                    <Button variant="primary">বিস্তারিত</Button>
                  </Link>
                </div>
              </SummaryCard>
            </Box>
          )
      )}
    </Flex>
  );
};

export default BookList;
