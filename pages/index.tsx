import React, { useState } from 'react';

import FilterContainer from '../src/components/FilterContainer';
import Header from '../src/components/Header';
import BaseLayout from '../src/layouts/BaseLayout';

const AppHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  return (
    <BaseLayout>
      <Header />
      <FilterContainer
        region={region}
        searchQuery={searchQuery}
        setRegion={setRegion}
        setSearchQuery={setSearchQuery}
      />
    </BaseLayout>
  );
};

// TODO: ADD SHADOWS

export default AppHome;
