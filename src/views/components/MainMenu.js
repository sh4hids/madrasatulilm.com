import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { configActions } from '../../state/config';
import Flex from './Flex';
import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-light.svg';
import Sun from '../assets/icons/sun.svg';
import Moon from '../assets/icons/moon.svg';
import Menu from '../assets/icons/menu.svg';

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

  svg {
    stroke: ${({ theme }) => theme.colors.primary3} !important;
  }

  .home-url {
    display: inline-flex;
    .header-logo {
      width: 60px;
      height: 60px;
    }
    .site-title {
      line-height: 60px;
    }
  }
  ul {
    list-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    li {
      margin-right: 24px;
      a {
        display: inline-box;
        height: 100%;
        width: 100%;
      }
      &::before,
      &::after {
        content: '';
        margin: 0;
        padding: 0;
      }
      &:last-child {
        margin-right: 20px;
        padding-right: 24px;
        border-right: 1px solid ${({ theme }) => theme.colors.dark1};
      }
    }
  }
  .theme-toggle,
  .menu-toggle {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 8px;
    svg {
      position: relative;
      top: 6px;
    }
  }
  .menu-toggle {
    display: none;
  }
  @media only screen and (max-width: 576px) {
    .menu-toggle {
      display: inline-flex;
      margin-left: 16px;
    }
    ul {
      height: 100vh;
      width: 100%;
      position: fixed;
      background-color: ${({ theme }) => theme.colors.background};
      left: 0;
      top: 48px;
      display: block;
      clip-path: circle(100px at 96% -16%);
      transition: all 0.4s ease-out;
      ${({ isMenuOpen }) =>
        isMenuOpen
          ? css`
              clip-path: circle(124vh at 96% -16%);
            `
          : ''};
      li {
        margin: 0;
        display: block;
        &:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
          &::after {
            margin-right: 0;
          }
        }
        a {
          font-size: 1.1rem;
          display: block;
          padding: 8px;
          text-align: center;
          border-bottom: 1px solid
            ${({ theme }) =>
              theme.name === 'light'
                ? theme.colors.light1
                : theme.colors.dark1};
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;

const MainMenu = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContainer isMenuOpen={isMenuOpen}>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={3}
        pr={3}
      >
        <Link to="/" className="home-url">
          {/* {theme.name === 'dark' ? (
            <LogoDark className="header-logo" />
            ) : (
            <LogoLight className="header-logo" />
          )} */}
          <span className="site-title">মাদ্‌রাসাতুল ইল্‌ম</span>
        </Link>
        <span>
          <ul>
            <li>
              <Link to="/">নীড়পাতা</Link>
            </li>
            <li>
              <Link to="/about/">পরিচিতি</Link>
            </li>
            {/* <li>
              <Link to="/blog/">ব্লগ</Link>
            </li> */}
            <li>
              <Link to="/facilities/">সুবিধাসমূহ</Link>
            </li>
            <li>
              <Link to="/study-materials/">শিক্ষাপোকরণ</Link>
            </li>
            <li>
              <Link to="/contact/">যোগাযোগ</Link>
            </li>
          </ul>
          <button
            className="theme-toggle"
            type="button"
            title={theme.name === 'dark' ? 'Toggle Light' : 'Toggle Dark'}
            onClick={() => {
              toggleTheme(theme.name === 'dark' ? 'light' : 'dark');
            }}
          >
            {theme.name === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </span>
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
