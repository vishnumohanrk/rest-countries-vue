import { Button, Flex } from '@chakra-ui/core';
import React from 'react';

export interface ShowMoreCompProps {
  pressed: () => void;
}

const ShowMore: React.FC<ShowMoreCompProps> = ({ pressed }) => (
  <Flex justify="center" mt={4} mb={8}>
    <Button w="sm" onClick={pressed}>
      Show More
    </Button>
  </Flex>
);

export default ShowMore;
