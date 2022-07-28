import React, { useState, useEffect } from 'react';
import { CardImage, Cards } from '../styled-components';
import pokemon from '../api/pokemon';

export default function Card({ name, url }) {
  const [detail, setDetail] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getDetailedData();
  });

  const getDetailedData = async () => {
    const response = await pokemon.get(`/${name}`);
    setDetail(response);
    isLoading(false);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <Cards>
      <CardImage src={detail.data.sprites.front_default} alt={name} />
      <h3>{name}</h3>
    </Cards>
  );
}
