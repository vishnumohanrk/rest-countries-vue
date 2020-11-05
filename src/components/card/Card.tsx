import { Box, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

import { ICountry } from '../../utils/model';
import CardFlag from './CardFlag';
import CardTitle from './CardTitle';
import CardTxtInfo from './CardTxtInfo';

const Card: React.FC<ICountry> = props => {
  const { capital, flag, name, population, region, alpha3Code } = props;

  return (
    <NextLink href={`/country/${alpha3Code}`} passHref>
      <Flex
        as="a"
        direction="column"
        rounded="md"
        cursor="pointer"
        boxShadow="lg"
        transition="all 0.2s ease-in"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'dark-lg' }}
        _focus={{ transform: 'translateY(-5px)', boxShadow: 'dark-lg' }}
      >
        <CardFlag countryName={name} flagSrc={flag} />
        <CardTitle txt={name} mt={5} mb={3} px={6} />
        <Box mb={8} px={6}>
          <CardTxtInfo
            keyTxt="Population"
            valueTxt={population.toLocaleString()}
          />
          <CardTxtInfo keyTxt="Region" valueTxt={region} />
          <CardTxtInfo keyTxt="Capital" valueTxt={capital} />
        </Box>
      </Flex>
    </NextLink>
  );
};

export default Card;
