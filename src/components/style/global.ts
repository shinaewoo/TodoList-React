import { css } from '@emotion/react';

const global = css`
  :root {
    --color-bg-dark: #f5f5f5;
    --color-bg: #fdfffd;
    --color-grey: #d1d1d1;
    --color-text: #22243b;
    --color-accent: #f16e03;
    --color-white: white;
    --color-scrollbar: #aaa7a7;
  }

  html {
    width: 100vw;
    min-width: 560px;
    height: 100vh;
  }

  html.dark {
    --color-bg-dark: #1a1c35;
    --color-bg: #22243b;
    --color-grey: #4e4e4e;
    --color-text: #fdfffd;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    min-width: 560px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    accent-color: var(--color-accent);
    background: rgb(81, 87, 111);
    background: linear-gradient(
      106deg,
      rgba(81, 87, 111, 1) 0%,
      rgba(60, 61, 69, 1) 100%
    );
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    width: 100%;
    height: 60%;
    max-width: 500px;
    background-color: var(--color-accent);
    background: rgb(81, 87, 111);
    background: linear-gradient(
      106deg,
      rgba(81, 87, 111, 1) 0%,
      rgba(60, 61, 69, 1) 100%
    );
  }
`;

export default global;
