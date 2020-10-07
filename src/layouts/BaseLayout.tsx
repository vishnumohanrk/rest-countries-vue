import { Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex as="main" flexDirection="column" maxW="1280px" py={4} px={6} mx="auto">
    {children}
  </Flex>
);

export default BaseLayout;
