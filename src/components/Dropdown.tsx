import { Select } from '@chakra-ui/core';
import React from 'react';

import { REGIONS } from '../models/constants';
import { FilterInputCompProps } from '../models/models';

const Dropdown: React.FC<FilterInputCompProps> = ({ value, setValue }) => {
  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => setValue(e.currentTarget.value);

  return (
    <Select
      mt={{ base: 4, sm: 0 }}
      w={{ base: '100%', sm: 2 / 5, md: 2 / 7, lg: 1 / 6 }}
      placeholder="Filter By Region"
      value={value}
      onChange={handleSelect}
    >
      {REGIONS.map(i => (
        <option value={i} key={i}>
          {i}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
