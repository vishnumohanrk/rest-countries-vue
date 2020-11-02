import { AspectRatio, Image } from '@chakra-ui/core';
import React from 'react';

interface CardFlagCompProps {
  flagSrc: string;
  countryName: string;
}

const CardFlag: React.FC<CardFlagCompProps> = ({ flagSrc, countryName }) => (
  <AspectRatio ratio={1.5}>
    <Image
      fit="cover"
      roundedTop="md"
      alt={`${countryName} Flag`}
      src={flagSrc}
    />
  </AspectRatio>
);

export default CardFlag;
