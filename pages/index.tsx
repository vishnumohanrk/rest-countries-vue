import { Button, Flex } from '@chakra-ui/core';
import Head from 'next/head';
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
  const [fullData, setFullData] = useState<ICountry[]>([]);

  const [viewData, setViewData] = useState<ICountry[] | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    getData()
      .then(res => {
        setFullData(res);
        setViewData(res);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    setShowMore(false);

    let newList: ICountry[] = fullData;

    if (searchQuery) {
      newList = fullData.filter(i => i.name.match(new RegExp(searchQuery, 'gi')));
    }

    if (region) {
      newList = newList.filter(i => i.region === region);
    }

    setViewData(newList);
  }, [searchQuery, region, fullData]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rest Countries</title>
        <meta name="description" content="Rest Countries Chumma" />
      </Head>

      <BaseLayout>
        <Header />
        <FilterContainer
          region={region}
          searchQuery={searchQuery}
          setRegion={setRegion}
          setSearchQuery={setSearchQuery}
        />
        {viewData && (
          <>
            <CardSection dataList={viewData.slice(0, 20)} />
            {!showMore && viewData?.length > 20 && (
              <Flex justify="center" mt={4} mb={8}>
                <Button w="sm" onClick={() => setShowMore(true)}>
                  Show More
                </Button>
              </Flex>
            )}
            {showMore && <CardSection dataList={viewData.slice(20)} />}
          </>
        )}
      </BaseLayout>
    </>
  );
};

// TODO: ADD SHADOWS

export default AppHome;
