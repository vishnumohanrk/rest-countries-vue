import { Flex } from '@chakra-ui/core';
import React from 'react';

import { TStringToVoid } from '../models/models';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

export interface FilterContainerCompProps {
  searchQuery: string;
  region: string;
  setSearchQuery: TStringToVoid;
  setRegion: TStringToVoid;
}

const FilterContainer: React.FC<FilterContainerCompProps> = props => {
  const { region, searchQuery, setRegion, setSearchQuery } = props;

  return (
    <Flex w="100%" my={6} flexDirection={{ base: 'column', sm: 'row' }} justify="space-between">
      <SearchInput setValue={setSearchQuery} value={searchQuery} />
      <Dropdown setValue={setRegion} value={region} />
    </Flex>
  );
};

export default FilterContainer;
