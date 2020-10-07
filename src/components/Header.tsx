import { Button, Flex, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" justify="space-between" align="center" w="100%">
      <Text fontSize={['xl']} fontWeight={['bold']}>
        Where in the World ?
      </Text>
      <Button variant="ghost" onClick={toggleColorMode}>
        {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </Flex>
  );
};

// TODO: ADD ICON

export default Header;
