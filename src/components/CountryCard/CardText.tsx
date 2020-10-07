import { Box, Text } from '@chakra-ui/core';
import React from 'react';

export interface CardTextCompProps {
  name: string;
  value: string | number;
}

const CardText: React.FC<CardTextCompProps> = ({ name, value }) => (
  <Box pb={1} fontSize={{ base: 'lg', xl: 'sm' }}>
    <Text as="span" textTransform="capitalize" fontWeight={['semibold']}>
      {name}:{' '}
    </Text>
    <Text as="span">{value.toLocaleString()}</Text>
  </Box>
);

export default CardText;
