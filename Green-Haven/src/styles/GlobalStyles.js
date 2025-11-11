import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Brand Colors */
    --color-brand-50: #e6f4ea;
    --color-brand-100: #c1e3c7;
    --color-brand-200: #8ce39c;
    --color-brand-500: #34a853;
    --color-brand-600: #0b8043;
    --color-brand-700: #05622c;
    --color-brand-800: #034e21;
    --color-brand-900: #023918;

    /* Red Colors */
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    /* Border Radius */
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    &,
    &.light-mode {
      /* Grey Palette */
      --color-grey-0: #fdfbf6;
      --color-grey-50: #f7f6f0;
      --color-grey-100: #f4f3ef;
      --color-grey-200: #e8e6df;
      --color-grey-300: #dcd9d0;
      --color-grey-400: #bfbcb1;
      --color-grey-500: #a3a091;
      --color-grey-600: #7d7a68;
      --color-grey-700: #57544b;
      --color-grey-800: #36342e;
      --color-grey-900: #1a1a18;

      /* Green (Main Brand) */
      --color-green-100: #e6f4ea;
      --color-green-500: #34a853;
      --color-green-700: #0b8043;

      /* Accent Colors */
      --color-blue-100: #e8f0fe;
      --color-blue-700: #1967d2;
      --color-yellow-100: #fff9db;
      --color-yellow-700: #fbbc04;

      --color-silver-100: #f2f2f0;
      --color-silver-700: #62625b;
      --color-indigo-100: #e6e8ff;
      --color-indigo-700: #3a3fc1;

      /* Effects */
      --backdrop-color: rgba(255, 255, 255, 0.1);
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
      --image-grayscale: 0%;
      --image-opacity: 100%;
    }

    &.dark-mode {
      /* Grey Palette */
      --color-grey-0: #121212;
      --color-grey-50: #1E1E1E;
      --color-grey-100: #2D2D2D;
      --color-grey-200: #3D3D3D;
      --color-grey-300: #4A4A4A;
      --color-grey-400: #6B6B6B;
      --color-grey-500: #8C8C8C;
      --color-grey-600: #B0BEC5;
      --color-grey-700: #E0E0E0;
      --color-grey-800: #F5F5F5;
      --color-grey-900: #FFFFFF;

      /* Green (Main Brand) */
      --color-green-100: #166534;
      --color-green-300: #1B5E20;
      --color-green-500: #2E7D32;
      --color-green-700: #66BB6A;
      --color-green-900: #A5D6A7;

      /* Accent Colors */
      --color-blue-100: #DBEAFE;
      --color-blue-700: #3B82F6;
      --color-yellow-100: #FFF3E0;
      --color-yellow-700: #F97316;

      --color-red-100: #FEE2E2;
      --color-red-700: #EF4444;
      --color-red-800: #DC2626;

      --color-orange-100: #FFF3E0;
      --color-orange-700: #F97316;

      /* Effects */
      --backdrop-color: rgba(0, 0, 0, 0.3);
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
      --image-grayscale: 10%;
      --image-opacity: 90%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: background-color 0.3s, border 0.3s, color 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-brand-600);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-500);
  }
`;

export default GlobalStyles;
