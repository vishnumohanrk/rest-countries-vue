import { Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';

import { ICountry } from '../../utils/models';
import CardText from './CardText';

const CardItem: React.FC<ICountry> = ({ name, flag, ...otherDetails }) => {
  return (
    <Flex flexDirection="column" w={{ md: '22.5%' }} rounded={['md']} shadow={['xl']}>
      <Image
        objectFit="cover"
        w="100%"
        h="12rem"
        roundedTop={['md']}
        src={flag}
        alt={`${name} Flag`}
      />
      <Text my={4} mx={5} fontSize={['2xl']} fontWeight={['bold']}>
        {name}
      </Text>
      <Flex flexDirection="column" mx={5} mb={8}>
        {Object.keys(otherDetails).map(i => (
          <CardText name={i} value={otherDetails[i]} key={i} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CardItem;
