import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Box, Breadcrumb, Divider, SEO, Text } from '../../../../views/components';
import books from '../../../../data/books';
import truncate from '../../../../utils/string-utils';

<SEO pageTitle="বুক শপের বইসমূহ" />
<Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
  <Text variant="h2" textAlign="center">
    বুক শপের বইসমূহ
  </Text>
  <Divider />
  <Breadcrumb
    links={[
      { url: '/', name: 'নীড়পাতা' },
      { url: '/finance/', name: 'আর্থিক ব্যাপার' },
      { url: '/business-of-madrassa/', name: 'মাদরাসাতুল ইলম ফুড এন্ড বুক শপ' },
    ]}
  />
  <Divider />

<table>
  <tr>
    <th>বই</th>
    <th>প্রচ্ছদ</th>
  </tr>
{books.map(book => <tr key={book.url}>
<td>
<Text variant="h3">
<Link to={`./${book.url}/`}>{book.name}</Link>
</Text>
<Text>{truncate(book.description, 100)}{' '}<Link to={`./${book.url}/`}>বিস্তারিত</Link></Text>
</td>
<td><Link to={`./${book.url}/`} className="table-book-cover"><img src={`/assets/images/${book.image}`} alt={book.name} /></Link></td>
</tr>)}  
</table>

<!-- <ul>
{books.map(book => <li key={book.url}><Link to={`./${book.url}/`}>{book.name}</Link></li>)}
<li><Link to="../">অন্যান্য পণ্য (যেমন: নধু, ঘি, তেল, 4ডি ব্লক) অর্ডার করুন</Link></li>
</ul> -->

</Box>
