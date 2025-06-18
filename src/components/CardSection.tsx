import React from 'react';
import CardItem from './CardItem';
import type { CardSectionProps } from '../types';
const CardSection: React.FC<CardSectionProps> = ({ items, dark }) => {
  return (
    <>
    {/* Loop through each card item and render a CardItem component */}
      {items.map((item, index) => (
        <CardItem key={index} data={item} dark={dark} />
      ))}
    </>
  );
};

export default CardSection;


