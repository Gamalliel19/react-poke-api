import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import pokemonDetail from '../api/pokemonDetail';
import { DetailCard, FlexCenter } from '../styled-components';

export default function PokeDetail() {
  const [isLoading, SetIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const { pokename } = useParams();

  useEffect(() => {
    fetchPoke();
  });

  const fetchPoke = async () => {
    const response = await pokemonDetail.get(`/${pokename}`);
    setData(response.data);
    SetIsLoading(false);
  };

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <Link to='/'>Back To Home...</Link>
      <FlexCenter>
        <DetailCard>
          <h1>{data.name}</h1>
          <h3>Habitat: {data.habitat.name}</h3>
          <h3>Egg Groups: {data.egg_groups[0].name}</h3>
          <p>{data.flavor_text_entries[0].flavor_text}</p>
        </DetailCard>
      </FlexCenter>
    </>
  );
}
