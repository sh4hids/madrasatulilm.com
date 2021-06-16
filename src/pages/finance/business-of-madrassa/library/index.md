import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Box, Breadcrumb, Divider, SEO, Text } from '../../../../views/components';
import books from '../../../../data/books';

<SEO pageTitle="মাদ্রাসাস্থ পাঠাগারের বইসমূহ" />
<Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
  <Text variant="h2" textAlign="center">
    মাদ্রাসাস্থ পাঠাগারের বইসমূহ
  </Text>
  <Divider />
  <Breadcrumb
    links={[
      { url: '/', name: 'নীড়পাতা' },
      { url: '/finance/', name: 'আর্থিক ব্যাপার' },
      { url: '/business-of-madrassa/', name: 'মাদ্রাসার আয়ের উৎস যখন ব্যবসা' },
    ]}
  />
  <Divider />

<ul>
{books.map(book => <li key={book.url}><Link to={`./${book.url}/`}>{book.name}</Link></li>)}
<li><Link to="../">অন্যান্য পণ্য (যেমন: নধু, ঘি, তেল, 4ডি ব্লক) অর্ডার করুন</Link></li>
</ul>

</Box>
