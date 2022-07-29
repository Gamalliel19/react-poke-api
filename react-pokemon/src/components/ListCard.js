import React, { useState, useEffect } from 'react';
import Card from './Card';
import pokemon from '../api/pokemon';
import { Flex, LoadMore, LoadMoreContainer } from '../styled-components';
import axios from 'axios';

export default function ListCard() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await pokemon.get('/');
    setDatas(res.data);
    setIsLoading(false);
    console.log(datas);
  };

  const onLoadMoreClick = async () => {
    const response = await axios.get(datas.next);
    setLoadData(response.data.results);
    console.log(loadData);
    setIsLoading(false);
  };

  if (isLoading) return 'Loading...';

  // const loadmore = datas;
  // console.log(loadmore.next);

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
        <LoadMore onClick={onLoadMoreClick}>Load More...</LoadMore>
      </LoadMoreContainer>
    </React.Fragment>
  );
}
