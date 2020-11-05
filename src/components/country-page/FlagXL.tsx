import { Box, Image } from '@chakra-ui/core';
import React from 'react';

const FlagXL: React.FC<{ name: string; url: string }> = ({ name, url }) => (
  <Box
    w={{ base: '100%', sm: '85%', md: '70%', lg: 1 / 2 }}
    mr={{ lg: '4%', xl: '8%' }}
    borderWidth={2}
  >
    <Image w="full" h="full" src={url} alt={`${name} - flag`} />
  </Box>
);

export default FlagXL;
