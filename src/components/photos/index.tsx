import React from 'react';
import styled from 'styled-components';
import Photo from '~/components/photo';
import Pagination from '~/components/pagination';

const Container = styled.div`
  padding: 0.5vw;
  font-size: 0;
  flex-flow: row wrap;
  display: flex;
`;
export interface PhotosDTO {
  count: number;
  documents: any[];
  limit: number;
  message: string;
  skip: 0;
}
interface PhotoProps {
  data: PhotosDTO;
}

function Photos(props: PhotoProps) {
  const { data } = props;
  if (data?.documents.length > 0) {
    const { count, limit, skip } = data;
    const paginationNumbers = [...new Array(Math.ceil(count / limit))].map(
      (_, index) => index
    );
    return (
      <section>
        <Container>
          {data.documents.map((photo) => (
            <Photo key={photo.id} item={photo} />
          ))}
        </Container>
        <Pagination data={paginationNumbers} skip={skip} />
      </section>
    );
  }
  return <img src="/empty.svg" alt="Empty" />;
}

export default Photos;
