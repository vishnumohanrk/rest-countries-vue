import { Select } from '@chakra-ui/core';
import React, { useState } from 'react';

import { REGIONS } from '../../utils/constants';
import { TRegion } from '../../utils/model';

const Dropdown: React.FC = () => {
  const [value, setValue] = useState<TRegion>('Filter By Region');

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) =>
    setValue(e.currentTarget.value as TRegion);

  return (
    <Select
      w={{ base: '100%', sm: 2 / 5, md: 2 / 7, lg: 1 / 6 }}
      mt={{ base: 4, sm: 0 }}
      value={value}
      onChange={handleChange}
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
