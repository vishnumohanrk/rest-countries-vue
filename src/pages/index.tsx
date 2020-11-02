import { Flex } from '@chakra-ui/core';
import React from 'react';

import Dropdown from '../components/form/Dropdown';
import FormInput from '../components/form/FormInput';

const AppHome: React.FC = () => (
  <>
    <Flex
      as="section"
      direction={{ base: 'column', sm: 'row' }}
      justify={{ sm: 'space-between' }}
      mb={5}
    >
      <FormInput />
      <Dropdown />
    </Flex>
  </>
);

export default AppHome;
