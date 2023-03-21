import React from 'react';
import { Link } from 'gatsby';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import SummaryCard from './SummaryCard';
import Text from './Text';

const CardList = ({ books = [] }) => (
  <Flex mx={[0, -2]} flexWrap="wrap" mt={4} justifyContent="center">
    {books.map((book) => (
      <Box key={book.title} width={[1, 1 / 3]} px={3} py={3}>
        <SummaryCard height={[180, 180, 240]}>
          <div>
            <Text variant="h3" mt={0}>
              {book.title}
            </Text>

            <Link to={`${book.link}/`}>
              <Button variant="primary">বিস্তারিত</Button>
            </Link>
          </div>
        </SummaryCard>
      </Box>
    ))}
  </Flex>
);

export default CardList;
