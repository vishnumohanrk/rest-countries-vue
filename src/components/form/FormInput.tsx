import { Input } from '@chakra-ui/core';
import React, { useState } from 'react';

const FormInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <Input
      placeholder="Search"
      w={{ base: '100%', sm: 1 / 2, md: 2 / 5, lg: 2 / 6 }}
      mr={{ base: 0, sm: 4 }}
      value={value}
      onChange={handleInput}
    />
  );
};

export default FormInput;
