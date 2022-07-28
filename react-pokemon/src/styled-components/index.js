import styled from 'styled-components';

export const Body = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h1`
  font-size: 46px;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 250px;
  height: 250px;
  background-color: #f5f5f5;
  padding: 24px;
  border-radius: 10px;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const LoadMoreContainer = styled.div`
  margin: 32px 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const LoadMore = styled.a`
  text-decoration: none;
  padding: 10px 45px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
`;
