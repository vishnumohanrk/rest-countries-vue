import { Flex } from '@chakra-ui/core';
import React from 'react';

import { ICountry } from '../../utils/models';
import CardItem from './CardItem';

export interface CardSectionCompProps {
  dataList: ICountry[];
}

const CardSection: React.FC<CardSectionCompProps> = ({ dataList }) => (
  <Flex
    as="section"
    flexDirection={{ base: 'column', md: 'row' }}
    flexWrap="wrap"
    justify="space-between"
  >
    {dataList.map(i => (
      <CardItem key={i.name} {...i} />
    ))}
  </Flex>
);

export default CardSection;
