import React, { useContext } from 'react';
import styled from 'styled-components';
import { mutate } from 'swr';
import PhotosApi from '~/lib/api/photos';
import PageContext from '~/lib/context/PageContext';
import Button from '../Button';

const Container = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

interface PaginationProps {
  data: number[];
  skip: number;
}

function Pagination(props: PaginationProps) {
  const { data, skip } = props;
  const { revalidateWithData } = useContext(PageContext);
  const skipFetch = (skip) => {
    mutate(['all-photos', skip], async () => {
      const { data: photos } = await PhotosApi.all(skip);
      revalidateWithData(photos);
    });
  };
  return (
    <Container>
      {data.map((number) => (
        <li key={number}>
          <Button onClick={() => skipFetch(number)} isActive={skip === number}>
            {number + 1}
          </Button>
        </li>
      ))}
    </Container>
  );
}

export default Pagination;
