import { Button } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

const BackBtn: React.FC = () => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <Button
      cursor="pointer"
      w={{ base: 1 / 3, lg: 1 / 5, xl: 1 / 8 }}
      mt={3}
      onClick={handleClick}
    >
      Back
    </Button>
  );
};

export default BackBtn;
