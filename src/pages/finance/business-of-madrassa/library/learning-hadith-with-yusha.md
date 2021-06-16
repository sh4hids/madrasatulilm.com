import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Box, Breadcrumb, Divider, SEO, Text } from '../../../../views/components';
import books from '../../../../data/books';

<SEO pageTitle={books[0].name} />
<Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
  <Text variant="h2" textAlign="center">
    {books[0].name}
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

<img src={`/assets/images/${books[0].image}`} alt={books[0].name} />

<Text variant="raw" html={books[0].description} />

<Text>
মূল্য: <br />
- {books[0].prices.hardCover} <br />
{books[0].prices.paperback ? `- ${books[0].prices.paperback}` : ''}

</Text>

<Text>
Call & Whatsapp for order: 01914-723676
</Text>

</Box>
