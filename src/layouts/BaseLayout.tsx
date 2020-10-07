import { Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex maxW="1280px" p={4} mx="auto">
    {children}
  </Flex>
);

export default BaseLayout;
