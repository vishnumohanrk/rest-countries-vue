import { ChakraProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import React from 'react';

import Header from '../components/Header';
import MainLayout from '../layouts/MainLayout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Header />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ChakraProvider>
);

export default MyApp;
