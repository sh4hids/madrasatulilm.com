import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Box, Breadcrumb, Divider, SEO, Text, Flex } from '../../../../views/components';
import books from '../../../../data/books';

<SEO pageTitle={books[2].name} />
<Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
  <Text variant="h2" textAlign="center">
    {books[2].name}
  </Text>
  <Divider />
  <Breadcrumb
    links={[
      { url: '/', name: 'নীড়পাতা' },
      { url: '/finance/', name: 'আর্থিক ব্যাপার' },
      { url: '/finance/business-of-madrassa/', name: 'মাদ্রাসার আয়ের উৎস যখন ব্যবসা' },
      { url: '/finance/business-of-madrassa/library/', name: 'মাদ্রাসাস্থ পাঠাগারের বইসমূহ' },
    ]}
  />
  <Divider />

<Flex mx={[0, -2]} flexWrap="wrap" mt={3}>
  <Box  width={[1, 1 / 2]} px={3} py={3}>        
    <img src={`/assets/images/${books[2].image}`} alt={books[2].name} />
  </Box>
  <Box  width={[1, 1 / 2]} px={3} py={3}>
    <Text variant="raw" html={books[2].description} />
    <Text>
    মূল্য: <br />
    - {books[2].prices.hardCover} <br />
    {books[2].prices.paperback ? `- ${books[2].prices.paperback}` : ''}
    </Text>
  </Box>
</Flex>

<Text mt={3} textAlign="center" fontWeight="bold">
Call & Whatsapp for order: 01914-723676
</Text>

</Box>
