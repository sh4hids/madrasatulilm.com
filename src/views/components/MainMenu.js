import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { configActions } from '../../state/config';
import Flex from './Flex';
import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-light.svg';

const MenuContainer = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: -1px;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.dark2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};

  .home-url {
    display: inline-flex;

    .header-logo {
      width: 48px;
      height: 48px;
    }

    .site-title {
      line-height: 48px;
    }
  }

  ul {
    list-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 8px;

      a {
        display: inline-box;
        height: 100%;
        width: 100%;
      }

      &:last-child {
        margin-right: 0;
      }

      &::before,
      &::after {
        content: '';
      }
    }
  }

  @media only screen and (max-width: 786px) {
  }
`;

const MainMenu = ({ theme }) => {
  return (
    <MenuContainer>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={3}
        pr={3}
      >
        <Link to="/" className="home-url">
          {theme.name === 'dark' ? (
            <LogoDark className="header-logo" />
          ) : (
            <LogoLight className="header-logo" />
          )}
          <span className="site-title">মাদরাসাতুল ইলম</span>
        </Link>
        <ul>
          <li>
            <Link to="/">নীড়পাতা</Link>
          </li>
          <li>
            <Link to="/blog">ব্লগ</Link>
          </li>
          <li>
            <Link to="/facilities">সুবিধাসমূহ</Link>
          </li>
          <li>
            <Link to="/study-materials">শিক্ষা উপকরণ</Link>
          </li>
          <li>
            <Link to="/notices">নোটিশ</Link>
          </li>
          <li>
            <Link to="/contact">যোগাযোগ</Link>
          </li>
        </ul>
      </Flex>
    </MenuContainer>
  );
};

const mapStateToProps = ({ config }) => ({
  theme: config.theme,
});

const mapActionToProps = {
  toggleTheme: configActions.toggleTheme,
};

export default connect(mapStateToProps, mapActionToProps)(MainMenu);
