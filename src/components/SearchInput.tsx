import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core';
import React from 'react';

import { FilterInputCompProps } from '../models/models';

const SearchInput: React.FC<FilterInputCompProps> = ({ value, setValue }) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  return (
    <InputGroup w={{ base: '100%', sm: 1 / 2, md: 2 / 5, lg: 2 / 6 }}>
      <InputLeftElement>
        <Icon name="search" color="gray.500" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search for a Country..."
        value={value}
        onChange={handleInput}
      />
    </InputGroup>
  );
};

export default SearchInput;
