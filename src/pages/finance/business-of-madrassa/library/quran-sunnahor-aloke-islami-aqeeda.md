import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Box, Breadcrumb, Divider, SEO, Text, Flex } from '../../../../views/components';
import books from '../../../../data/books';

<SEO pageTitle={books[22].name} seoImage={`/assets/images/${books[22].image}`}/>
<Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
<Text variant="h2" textAlign="center">
{books[22].name}
</Text>
<Divider />
<Breadcrumb
links={[
{ url: '/', name: 'নীড়পাতা' },
{ url: '/finance/', name: 'আর্থিক ব্যাপার' },
{ url: '/finance/business-of-madrassa/', name: 'মাদরাসাতুল ইলম ফুড এন্ড বুক শপ' },
{ url: '/finance/business-of-madrassa/library/', name: 'মাদ্রাসাস্থ পাঠাগারের বইসমূহ' },
]}
/>
<Divider />

<Flex mx={[0, -2]} flexWrap="wrap" mt={3}>
<Box width={[1, 1 / 2]} px={3} py={3}>  
 <img src={`/assets/images/${books[22].image}`} alt={books[22].name} />
</Box>
<Box width={[1, 1 / 2]} px={3} py={3}>
<Text variant="raw" html={books[22].description} />
<Text>
মূল্য: <br /> - {books[22].prices.hardCover} <br />
{books[22].prices.paperback ? `- ${books[22].prices.paperback}` : ''}
</Text>
</Box>
</Flex>

<Text mt={3} textAlign="center" fontWeight="bold">
Call & Whatsapp for order: 01914-723676
</Text>

</Box>
