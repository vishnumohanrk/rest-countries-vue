import React from 'react';

import { ICountryPage } from '../../utils/model';
import CardTxtInfo from '../card/CardTxtInfo';
import InfoBox from './InfoBox';

const Info2: React.FC<ICountryPage> = ({ tld, currencies, languages }) => (
  <InfoBox>
    <CardTxtInfo keyTxt="Top Level Domain" valueTxt={tld.join(', ')} />
    <CardTxtInfo keyTxt="Currencies" valueTxt={currencies.join(', ')} />
    <CardTxtInfo keyTxt="Languages" valueTxt={languages.join(', ')} />
  </InfoBox>
);

export default Info2;
