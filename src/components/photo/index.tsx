import React, { useContext } from 'react';
import styled from 'styled-components';
import { mutate } from 'swr';
import PhotosApi from '~/lib/api/photos';
import PageContext from '~/lib/context/PageContext';
import Button from '~/components/Button';

const Container = styled.div`
  flex: auto;
  width: 200px;
  margin: 0.5vw;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  &:hover {
    opacity: 0.5;
    transition: 0.9s;
  }
`;

const Label = styled.label`
  font-size: 14px;
  padding: 5px 0;
`;

export interface PhotoDTO {
  id: string;
  album: string;
  name: string;
  path: string;
  raw: string;
}

interface PhotoProps {
  item: PhotoDTO;
}

function Photo(props: PhotoProps) {
  const {
    item: { id, album, name, raw },
  } = props;
  const { revalidate } = useContext(PageContext);

  const deletePhoto = () => {
    mutate('delete-hoto', async () => {
      try {
        await PhotosApi.delete(album, name);
        revalidate();
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    });
  };

  return (
    <Container key={id}>
      <Image
        style={{ background: `url(${raw}) no-repeat center center/cover` }}
      />
      <Label>{album}</Label>
      <Label>{name}</Label>
      <Button onClick={deletePhoto} padding="0.25rem">
        Delete
      </Button>
    </Container>
  );
}

export default Photo;
