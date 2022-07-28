import React, { useState, useEffect } from 'react';
import Card from './Card';
import pokemon from '../api/pokemon';
import { Flex, LoadMore, LoadMoreContainer } from '../styled-components';

export default function ListCard() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await pokemon.get('/');
    setDatas(res.data);
    setIsLoading(false);
    console.log(datas);
  };

  if (isLoading) return 'Loading...';

  return (
    <React.Fragment>
      <Flex>
        {datas.results.map((data, i) => {
          return (
            <div key={i}>
              <Card name={data.name} url={data.url} />
            </div>
          );
        })}
      </Flex>
      <LoadMoreContainer>
        <LoadMore href={datas.next}>Load More...</LoadMore>
      </LoadMoreContainer>
    </React.Fragment>
  );
}
