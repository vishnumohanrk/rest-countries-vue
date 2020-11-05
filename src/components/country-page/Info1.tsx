import React from 'react';

import { ICountryPage } from '../../utils/model';
import CardTxtInfo from '../card/CardTxtInfo';
import InfoBox from './InfoBox';

const Info1: React.FC<ICountryPage> = props => {
  const { nativeName, population, region, subRegion, capital } = props;

  return (
    <InfoBox>
      <CardTxtInfo keyTxt="Native Name" valueTxt={nativeName} />
      <CardTxtInfo keyTxt="Population" valueTxt={population.toLocaleString()} />
      <CardTxtInfo keyTxt="Region" valueTxt={region} />
      <CardTxtInfo keyTxt="Sub Region" valueTxt={subRegion} />
      <CardTxtInfo keyTxt="Capital" valueTxt={capital} />
    </InfoBox>
  );
};

export default Info1;
