import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* fira-code-regular - latin */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Hind Siliguri', 'Lateef', sans-serif;
    // font-size: 20px;
    font-size: calc(16px + (20 - 16) * ((100vw - 400px) / (1600 - 400)));
    line-height: calc(24px + 1.2vw);
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};

    @media only screen and (max-width: 576px) {
      font-size: calc(18px + (24 - 18) * ((100vw - 400px) / (1600 - 400)));
      line-height: calc(24px + 1.2vw);
    }
  }

  p {
    margin: calc(16px + 1.05vw) 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.primary3 : theme.colors.primary1};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: calc(16px + 1.05vw) 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary3};
  }

  h1, h2, h3 {
    @media only screen and (max-width: 576px) {
      line-height: calc(32px + 1.2vw);
    }
  }

  h4, h5, h6 {
    line-height: calc(18px + .4vw);

    @media only screen and (max-width: 576px) {
      line-height: calc(20px + 1.2vw);
    }
  }

  h1 {
    font-size: 1.912rem;
  }

  h2 {
    font-size: 1.616rem;
  }

  h3 {
    font-size: 1.471rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.243rem;
  }

  h6 {
    font-size: 1.132rem;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.text};
    padding: 16px 24px;
    border-radius: 4px;

    p {
      text-align: center;
      margin: 8px 0;
      padding: 0;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  * ::selection {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }

  pre {
    border-radius: 8px;
  }

  code[class*='language-']::selection, pre[class*='language-']::selection, code[class*='language-'] ::selection, pre[class*='language-'] ::selection {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary3};
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.2em .5em;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.primary3};
  }

  .header-anchor-icon.before {
    top: -1px;
    padding-right: 8px;

  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      &::before {
        content: '⟐';
        font-size: 1.2rem;
        margin-right: 8px;
        position: relative;
        top: 0;
        color: ${({ theme }) => theme.colors.primary3};
      }
    }
  }

  div.notice-box {
    background-color: ${({ theme }) => theme.colors.dark1};
    text-align: center;
    border-radius: 4px;
    position: relative;
    padding: 16px;
    margin: 64px 0;

    p, h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme.colors.light2};
      font-size: 1.2rem;
    }

    a {
      color: ${({ theme }) => theme.colors.success};
    }

    &::before {
      content: '';
      width: 64px;
      height: 64px;
      display: block;
      background-color: ${({ theme }) => theme.colors.primary3};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
    }

    &.notice {
      &::before {
        background-image: url('/assets/images/bell.svg');
      }
    }
    &.tips {
      &::before {
        background-image: url('/assets/images/lightbulb-flash.svg');
      }
    }
  }

  .gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }

  table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;

  }


  @media only screen and (max-width: 576px) {

    h1, h2, h3, h4, h5, h6 {
      .header-anchor-icon.before{
        svg {
          visibility: hidden;
        }
      }
    }


  }

  .gatsby-highlight {
    pre {
      border-bottom: 4px solid;
      border-color: ${({ theme }) => theme.colors.primary3};

      code {
        font-family: 'Fira Code', monospace;
      }
    }
  }

  .post-meta {
    svg {
      position: relative;
      top: 4px;
    }
  }

  table {
    width: 100%;
  }

  table, th, td {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }

  td {
    padding: 16px;

    a.table-book-cover {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 240px;
      height: auto;

      @media only screen and (max-width: 576px) {
        width: 100px;
      
      }
    }
  }

`;

export default GlobalStyle;
