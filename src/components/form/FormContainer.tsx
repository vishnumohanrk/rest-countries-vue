import { Flex } from '@chakra-ui/core';
import React from 'react';

import { IState, TDispatch } from '../../utils/model';
import Dropdown from './Dropdown';
import FormInput from './FormInput';

interface FormContainerCompProps {
  state: IState;
  dispatch: TDispatch;
}

const FormContainer: React.FC<FormContainerCompProps> = props => {
  const { dispatch, state } = props;

  return (
    <Flex
      as="section"
      direction={{ base: 'column', sm: 'row' }}
      justify={{ sm: 'space-between' }}
      mb={10}
    >
      <FormInput value={state.searchQuery} handleChange={dispatch} />
      <Dropdown value={state.region} handleChange={dispatch} />
    </Flex>
  );
};

export default FormContainer;
