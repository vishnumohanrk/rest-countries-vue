import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

interface CardTxtInfoCompProps {
  keyTxt: string;
  valueTxt: string;
}

const CardTxtInfo: React.FC<CardTxtInfoCompProps> = ({ keyTxt, valueTxt }) => (
  <Flex>
    <Text fontWeight="semibold">{keyTxt}:&nbsp;</Text>
    <Text>{valueTxt}</Text>
  </Flex>
);

export default CardTxtInfo;
