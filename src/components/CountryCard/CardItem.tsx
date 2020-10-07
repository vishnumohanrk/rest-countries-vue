import { Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';

import { ICountry } from '../../utils/models';
import CardText from './CardText';

const CardItem: React.FC<ICountry> = ({ name, flag, ...otherDetails }) => {
  return (
    <Flex
      flexDirection="column"
      w={{ base: '100%', md: '48%', lg: '32%', xl: '23.5%' }}
      rounded={['md']}
      shadow={['lg']}
      mt={4}
      mb={8}
    >
      <Image
        objectFit="cover"
        w="100%"
        h={{ base: '14rem', sm: '17rem', md: '16rem', lg: '14rem', xl: '12rem' }}
        roundedTop={['md']}
        src={flag}
        alt={`${name} Flag`}
      />
      <Text mx={6} mt={5} mb={3} fontSize={['lg']} fontWeight={['bold']}>
        {name}
      </Text>
      <Flex flexDirection="column" mx={6} mb={8}>
        {Object.keys(otherDetails).map(i => (
          <CardText name={i} value={otherDetails[i]} key={i} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CardItem;
