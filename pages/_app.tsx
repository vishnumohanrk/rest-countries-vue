import { ColorModeProvider, CSSReset, theme } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ColorModeProvider>
  </ThemeProvider>
);

export default MyApp;
