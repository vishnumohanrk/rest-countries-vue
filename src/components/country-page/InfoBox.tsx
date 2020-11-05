import { Box } from '@chakra-ui/core';
import React from 'react';

interface InfoBoxCompProps {
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxCompProps> = ({ children }) => (
  <Box mt={5} lineHeight={2} w={{ base: 'full', lg: 1 / 2 }}>
    {children}
  </Box>
);

export default InfoBox;
