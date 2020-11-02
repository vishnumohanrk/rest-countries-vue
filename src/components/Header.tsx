import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const value: 'Dark' | 'Light' = colorMode === 'dark' ? 'Light' : 'Dark';

  return (
    <Box as="header" position="sticky" borderBottomWidth={1} boxShadow="sm">
      <Flex
        justify="space-between"
        align="center"
        maxW="1440px"
        mx="auto"
        my={3}
        px={4}
      >
        <Text as="h1" fontWeight="bold" fontSize={{ base: 'lg', sm: '2xl' }}>
          Where in the World
        </Text>
        <Button variant="ghost" onClick={toggleColorMode}>
          {value} Mode
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
