import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/core';
import NextLink from 'next/link';
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
        <NextLink href="/" passHref>
          <Text as="a" fontWeight="bold" fontSize={{ base: 'lg', sm: '2xl' }}>
            Where in the World
          </Text>
        </NextLink>
        <Button variant="ghost" onClick={toggleColorMode}>
          {value} Mode
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
