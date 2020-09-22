import React from 'react';
import styled, { css } from 'styled-components';
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

  .rec-dot.rec.rec-dot_active {
    background-color: ${({ theme }) => theme.colors.primary1};
    box-shadow: 0 0 1px 3px ${({ theme }) => theme.colors.primary3};
  }

  .rec-dot.rec {
    &:hover,
    &:focus {
      box-shadow: 0 0 1px 3px ${({ theme }) => theme.colors.primary1};
    }
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
  height: 68vh;
  transition: transform 200ms ease;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  color: #fff;
  ${({ bgImage }) =>
    bgImage
      ? css`
          background-image: url('/assets/images/${bgImage}');
        `
      : css`
          background-image: url('/assets/images/madrasatul-ilm-01_s.jpg');
        `};
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
    background: rgba(0, 0, 0, 0.2);
  }

  .item-details {
    max-width: 960px;
    padding: 32px;
    text-align: center;
    z-index: 123;
    position: relative;
    bottom: 0;
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
        <Item />
        <Item bgImage="madrasatul-ilm-02_s.jpg" />
        <Item bgImage="madrasatul-ilm-03_s.jpg" />
        <Item bgImage="madrasatul-ilm-06_s.jpg" />
        <Item bgImage="madrasatul-ilm-07_s.jpg" />
        <Item bgImage="madrasatul-ilm-08_s.jpg" />
        <Item bgImage="madrasatul-ilm-09_s.jpg" />
        <Item bgImage="madrasatul-ilm-10_s.jpg" />
      </Carousel>
    </HeroContainer>
  );
};

export default HeroSection;
