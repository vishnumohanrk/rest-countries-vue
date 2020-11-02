import { GetStaticProps } from 'next';
import React, { useState } from 'react';

import CardGrid from '../components/card/CardGrid';
import FormContainer from '../components/form/FormContainer';
import ShowMoreBtn from '../components/ShowMoreBtn';
import { getAllCountries } from '../utils/helperFns';
import { ICountry } from '../utils/model';

interface AppHomeCompProps {
  data: ICountry[];
}

const AppHome: React.FC<AppHomeCompProps> = props => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <FormContainer />
      <CardGrid data={props.data.slice(0, 20)} />
      {!showMore ? (
        <ShowMoreBtn handleClick={() => setShowMore(!showMore)} />
      ) : (
        <CardGrid data={props.data.slice(20)} />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllCountries();
  return { props: { data } };
};

export default AppHome;
