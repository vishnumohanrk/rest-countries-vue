import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';

import { ICountry } from '../../utils/model';
import Card from './Card';

interface CardGridCompProps {
  data: ICountry[];
}

const CardGrid: React.FC<CardGridCompProps> = ({ data }) => (
  <SimpleGrid
    mb="50px"
    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
    spacingX={{ base: '25px', xl: '50px' }}
    spacingY="50px"
  >
    {data.map(i => (
      <Card {...i} key={i.name} />
    ))}
  </SimpleGrid>
);

export default CardGrid;
