import { Flex } from '@chakra-ui/core';
import React from 'react';

interface MainLayoutCompProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutCompProps> = ({ children }) => (
  <Flex as="main" direction="column" maxW="1280px" mx="auto" p={5}>
    {children}
  </Flex>
);

export default MainLayout;
