import React, { useEffect, useState } from 'react';

import CardSection from '../src/components/CountryCard/CardSection';
import FilterContainer from '../src/components/FilterContainer';
import Header from '../src/components/Header';
import BaseLayout from '../src/layouts/BaseLayout';
import { getData } from '../src/utils/APIResp';
import { ICountry } from '../src/utils/models';

const AppHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const [viewData, setViewData] = useState<ICountry[]>([]);

  useEffect(() => {
    getData()
      .then(res => setViewData(res))
      .catch(console.log);
  }, []);

  return (
    <BaseLayout>
      <Header />
      <FilterContainer
        region={region}
        searchQuery={searchQuery}
        setRegion={setRegion}
        setSearchQuery={setSearchQuery}
      />
      <CardSection dataList={viewData} />
    </BaseLayout>
  );
};

// TODO: ADD SHADOWS

export default AppHome;
