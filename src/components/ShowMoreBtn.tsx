import { Button, Flex } from '@chakra-ui/core';
import React from 'react';

interface ShowMoreBtnCompProps {
  handleClick: () => void;
}

const ShowMoreBtn: React.FC<ShowMoreBtnCompProps> = ({ handleClick }) => (
  <Flex justify="center">
    <Button w={{ base: '100%', sm: '75%', md: '35%' }} onClick={handleClick}>
      Show More
    </Button>
  </Flex>
);

export default ShowMoreBtn;
