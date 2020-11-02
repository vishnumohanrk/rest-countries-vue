import { Input } from '@chakra-ui/core';
import React from 'react';

import { TDispatch } from '../../utils/model';

interface FormCompProps {
  value: string;
  handleChange: TDispatch;
}

const FormInput: React.FC<FormCompProps> = ({ value, handleChange }) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) =>
    handleChange({ type: 'search', payload: e.currentTarget.value });

  return (
    <Input
      aria-label="Search"
      placeholder="Search for a Country"
      w={{ base: '100%', sm: 1 / 2, md: 2 / 5, lg: 2 / 6 }}
      mr={{ base: 0, sm: 4 }}
      value={value}
      onChange={handleInput}
    />
  );
};

export default FormInput;
