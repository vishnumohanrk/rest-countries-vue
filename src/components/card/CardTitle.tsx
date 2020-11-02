import { Text, TextProps } from '@chakra-ui/core';
import React from 'react';

interface CardTitleCompProps extends TextProps {
  txt: string;
}

const CardTitle: React.FC<CardTitleCompProps> = ({ txt, ...rest }) => (
  <Text as="h2" fontWeight="bold" fontSize="lg" {...rest}>
    {txt}
  </Text>
);

export default CardTitle;
