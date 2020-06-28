/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState, useRef, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { mutate } from 'swr';
import PageContext from '~/lib/context/PageContext';
import PhotosApi from '~/lib/api/photos';
import styled from 'styled-components';
import Button from '~/components/Button';
import Files from './Files';
import AlbumSelector from './AlbumSelector';

const Container = styled.section`
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
`;

const UploadBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #545454;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-bottom: 10px;
`;

function Uploader() {
  const [documents, setDocuments] = useState([]);
  const { revalidate } = useContext(PageContext);
  const selectEl = useRef<HTMLSelectElement>(null);
  const selectedAlbum = selectEl?.current?.value!;
  const onDrop = useCallback((acceptedFiles) => {
    setDocuments([...documents, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const upload = () => {
    mutate('upload-photos', async () => {
      const formData = new FormData();
      formData.append('album', selectedAlbum);
      documents.map((document) => formData.append('documents', document));
      try {
        await PhotosApi.upload(formData);
        // refetch new list
        revalidate();
        setDocuments([]);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    });
  };
  return (
    <Container>
      <UploadBox {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </UploadBox>
      <Files data={documents} />
      <AlbumSelector refEl={selectEl} />
      <Button onClick={upload} disabled={documents.length === 0}>
        Upload
      </Button>
    </Container>
  );
}

export default Uploader;
