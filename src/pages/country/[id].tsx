import { Box, Flex } from '@chakra-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import CardTitle from '../../components/card/CardTitle';
import BackBtn from '../../components/country-page/BackBtn';
import BorderCoutries from '../../components/country-page/BorderCoutries';
import FlagXL from '../../components/country-page/FlagXL';
import Info1 from '../../components/country-page/Info1';
import Info2 from '../../components/country-page/Info2';
import { getAllCountries, getCountryByName } from '../../utils/helperFns';
import { ICountryPage } from '../../utils/model';

const CountryPage: React.FC<{ data: ICountryPage }> = ({ data }) => {
  const { name, flag, borderCountries } = data;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Frontend Mentor - REST Countries API with color theme switcher - by Vishnumohan R K"
        />
      </Head>

      <BackBtn />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align={{ base: 'center', lg: 'start', xl: 'center' }}
        justify="space-between"
        mt={10}
      >
        <FlagXL name={name} url={flag} />
        <Box
          w={{ base: '100%', sm: '85%', md: '70%', lg: 1 / 2 }}
          mt={{ base: 10, lg: 0 }}
        >
          <CardTitle fontSize="3xl" txt={name} />
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'center', lg: 'start' }}
          >
            <Info1 {...data} />
            <Info2 {...data} />
          </Flex>
          <BorderCoutries arr={borderCountries} />
        </Box>
      </Flex>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllCountries();
  return {
    paths: data.map(i => ({ params: { id: i.alpha3Code } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getCountryByName((params as { id: string }).id);
  return { props: { data } };
};

export default CountryPage;
