import React from 'react';
import styled from 'styled-components';
import Photo from '~/components/photo';
import PhotoDTO from '~/components/photo';
const Container = styled.div`
  padding: 0.5vw;
  font-size: 0;
  flex-flow: row wrap;
  display: flex;
`;
interface PhotosDTO {
  count: number;
  documents: PhotoDTO[];
  limit: number;
  message: string;
  skip: 0;
}
interface PhotoProps {
  data: PhotosDTO;
}

function Photos(props: PhotoProps) {
  const { data } = props;
  if (data?.documents) {
    return (
      <Container>
        {data.documents.map((photo) => (
          <Photo key={photo.id} item={photo} />
        ))}
      </Container>
    );
  }
  return null;
}

export default Photos;
