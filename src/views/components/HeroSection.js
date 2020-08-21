import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

const HeroContainer = styled.div`
  margin-top: 48px;
  position: relative;

  .rec-slider-container {
    margin: 0;
  }

  .rec-pagination {
    position: absolute;
    bottom: 16px;
  }

  ul {
    li {
      &::after,
      &::before {
        content: '';
      }
    }
  }
`;

const Item = styled.div`
  height: 480px;
  transition: transform 200ms ease;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #673ab7;
  background-image: url('https://images.pexels.com/photos/1586150/pexels-photo-1586150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .item-details {
    max-width: 960px;
    padding: 32px;
    text-align: center;
    z-index: 123;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Carousel
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        enableAutoPlay
        autoPlaySpeed={3000}
        showArrows={false}
      >
        <Item>
          <div className="item-details">
            {' '}
            1: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
        <Item>
          <div className="item-details">
            2: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
        <Item>
          <div className="item-details">
            3: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
        <Item>
          <div className="item-details">
            4: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
        <Item>
          <div className="item-details">
            5: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
        <Item>
          <div className="item-details">
            6: আল-কুর্‌আনুল কারীমের হিফয কার্যক্রমকে কেন্দ্র করে বাংলাদেশে গড়ে
            উঠেছে অসংখ্য প্রতিষ্ঠান। কিন্তু আমরা লক্ষ্য করেছি, প্রতিষ্ঠানগুলোর
            বেশিরভাগই আল-কুর্‌আনের মূল উদ্দেশ্যকে পূরণ করতে ব্যর্থ। পবিত্র
            গ্রন্থ আল-কুর্‌আন নাযিলের মূল উদ্দেশ্য সম্পর্কে আল্লাহ বলেন:
          </div>
        </Item>
      </Carousel>
    </HeroContainer>
  );
};

export default HeroSection;
