import { Flex } from '@chakra-ui/core';
import React from 'react';

import Dropdown from './Dropdown';
import FormInput from './FormInput';

// interface FormContainerCompProps {
//   :
// }

const FormContainer: React.FC = () => (
  <Flex
    as="section"
    direction={{ base: 'column', sm: 'row' }}
    justify={{ sm: 'space-between' }}
    mb={10}
  >
    <FormInput />
    <Dropdown />
  </Flex>
);

export default FormContainer;
