import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

import { TStringToVoid } from '../utils/models';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

export interface FilterContainerCompProps {
  searchQuery: string;
  region: string;
  setSearchQuery: TStringToVoid;
  setRegion: TStringToVoid;
  count: number;
}

const FilterContainer: React.FC<FilterContainerCompProps> = props => {
  const { region, searchQuery, setRegion, setSearchQuery, count } = props;

  return (
    <Flex flexDirection="column" mt={6} mb={4}>
      <Flex w="100%" flexDirection={{ base: 'column', sm: 'row' }} justify="space-between">
        <SearchInput setValue={setSearchQuery} value={searchQuery} />
        <Dropdown setValue={setRegion} value={region} />
      </Flex>
      <Text as="span" mt={2} color="gray.500" fontSize={['xs']}>
        {count} results
      </Text>
    </Flex>
  );
};

export default FilterContainer;
