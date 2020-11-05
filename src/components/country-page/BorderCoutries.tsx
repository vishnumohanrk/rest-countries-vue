import { Box, Button, Text, Wrap, WrapItem } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

const BorderCoutries: React.FC<{ arr: string[] }> = ({ arr }) => (
  <Box alignSelf="end">
    <Text fontSize="lg" fontWeight="600" mt={8} mb={4}>
      Border Countries:
    </Text>
    <Wrap spacing="18px">
      {arr.map(i => (
        <WrapItem key={i}>
          <NextLink href={`/country/${i}`} passHref>
            <Button as="a">{i}</Button>
          </NextLink>
        </WrapItem>
      ))}
    </Wrap>
  </Box>
);

export default BorderCoutries;
