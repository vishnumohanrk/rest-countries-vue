import { GetStaticProps } from 'next';
import React, { useEffect, useReducer, useState } from 'react';

import CardGrid from '../components/card/CardGrid';
import FormContainer from '../components/form/FormContainer';
import ShowMoreBtn from '../components/ShowMoreBtn';
import { getAllCountries } from '../utils/helperFns';
import { ICountry } from '../utils/model';
import { appReducer, intitialState } from '../utils/reducer';

interface AppHomeCompProps {
  data: ICountry[];
}

const AppHome: React.FC<AppHomeCompProps> = props => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [state, dispatch] = useReducer(appReducer, intitialState(props.data));

  useEffect(() => setShowMore(false), [state]);

  return (
    <>
      <FormContainer dispatch={dispatch} state={state} />
      <CardGrid data={state.viewData.slice(0, 20)} />
      {!showMore && state.viewData.length > 20 ? (
        <ShowMoreBtn handleClick={() => setShowMore(!showMore)} />
      ) : (
        <CardGrid data={state.viewData.slice(20)} />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllCountries();
  return { props: { data }, revalidate: 1 };
};

export default AppHome;
