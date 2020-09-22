import React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from '../views/layouts';
import {
  Box,
  HeroSection,
  SectionTitle,
  SEO,
  Text,
  TagList,
} from '../views/components';
import config from '../../data/SiteConfig';

const Index = () => {
  return (
    <MainLayout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <HeroSection />
      <Box maxWidth={960} margin="0 auto">
        <SectionTitle title="পরিচিতি" />
        <Text textAlign="center">
          আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে উঠেছে
          অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর বেশিরভাগই
          আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র গ্রন্থ আল-কুর্‌আন
          নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
        </Text>
        <Text textAlign="center">
          كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ
          وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ
        </Text>
        <Text textAlign="center">
          “এক মুবারক কিতাব, এটা আমরা আপনার প্রতি নাযিল করেছি, যাতে মানুষ এর আয়াত
          সমূহ গভীরভাবে চিন্তা করে এবং যাতে বোধশক্তিসম্পন্ন ব্যক্তিরা গ্ৰহণ করে
          উপদেশ।” (সুরা 38 সাদ: ২৯)
        </Text>
        <Text textAlign="center">
          আর তাই, হিফযুল কুর্‌আনে এক বৈচিত্র আনার লক্ষ্য নিয়ে ‘মাদ্রাসাতুল ইলম’
          যাত্রা শুরু করে ২০১৯ সালে।
        </Text>
        <SectionTitle title="পাঠ কার্যক্রম" />
        <TagList
          tags={[
            { title: 'নূরানী ও নাযেরা প্রোগ্রাম' },
            { title: 'হিফয প্রোগ্রাম' },
            { title: 'সহীহ তিলাওয়াত' },
            { title: 'আরবী ভাষা শিক্ষা' },
            { title: 'সাধারণ শিক্ষা' },
            { title: 'পার্ট টাইম মক্তব:' },
          ]}
        />

        <SectionTitle title="সুবিধাসমূহ" />

        <ul>
          <li>বালক শাখার জন্য আবাসিক/অনাবাসিক সুবিধা</li>
          <li>
            বালিকা শাখায় অনাবাসিক ব্যবস্থা, তবে মহিলা শিক্ষিকা দ্বারা পাঠদান
          </li>
          <li>বালক-বালিকা উভয় শাখায় পাঠদানের জন্য নিরিবিলি পরিবেশ</li>
          <li>আবাসিক ছাত্রদের জন্য উন্নত খাবারের ব্যবস্থা</li>
          <li>শিক্ষার্থীদের খেলাধুলার জন্য নিরাপদ স্থান</li>
          <li>সি-সি ক্যামেরা দ্বারা সার্বিক পরিস্থিত নজরদারীতে রাখা</li>
          <li>আবাসিক ছাত্রদের দেখাশোনার জন্য একজন তত্ত্বাবধয়কের অবস্থান</li>
        </ul>

        {/* <SectionTitle title="শিক্ষাপোকরণ" /> */}
      </Box>
    </MainLayout>
  );
};

export default Index;
