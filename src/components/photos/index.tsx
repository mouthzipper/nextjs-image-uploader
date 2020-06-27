import React from 'react';
import useSWR from 'swr';
import PhotosApi from '~/lib/api/photos';
import styled from 'styled-components';
import Photo from '~/components/photo';

const Container = styled.div`
  padding: 0.5vw;
  font-size: 0;
  flex-flow: row wrap;
  display: flex;
`;
const fetchPhotos = async () => {
  const { data } = await PhotosApi.all();
  return data;
};

function Photos() {
  const { data: photos } = useSWR('all-photos', fetchPhotos);
  if (photos?.documents.length > 0) {
    return (
      <Container>
        {photos.documents.map((photo) => (
          <Photo key={photo.id} data={photo} />
        ))}
      </Container>
    );
  }
  return null;
}

export default Photos;
