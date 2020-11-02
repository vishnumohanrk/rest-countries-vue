import { Select } from '@chakra-ui/core';
import React from 'react';

import { REGIONS } from '../../utils/constants';
import { TDispatch, TRegion } from '../../utils/model';

interface DropdownCompProps {
  value: TRegion;
  handleChange: TDispatch;
}

const Dropdown: React.FC<DropdownCompProps> = ({ value, handleChange }) => {
  const onChange = (e: React.FormEvent<HTMLSelectElement>) =>
    handleChange({ type: 'filter', payload: e.currentTarget.value as TRegion });

  return (
    <Select
      aria-label="Filter by Region"
      w={{ base: '100%', sm: 2 / 5, md: 2 / 7, lg: 1 / 6 }}
      mt={{ base: 4, sm: 0 }}
      value={value}
      onChange={onChange}
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
