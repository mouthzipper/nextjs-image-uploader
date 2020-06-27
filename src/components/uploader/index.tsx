/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { mutate } from 'swr';
import PhotosApi from '~/lib/api/photos';

function Uploader() {
  const [documents, setDocuments] = useState([]);
  const selectEl = useRef<HTMLSelectElement>(null);
  const onDrop = useCallback((acceptedFiles) => {
    setDocuments([...documents, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const upload = () => {
    const selectedAlbum = selectEl?.current?.value!;
    mutate('upload-photos', async () => {
      const formData = new FormData();
      formData.append('album', selectedAlbum);
      for (let i = 0; i < documents.length; i++) {
        formData.append('documents', documents[i]);
      }
      try {
        await PhotosApi.upload(formData);
        setDocuments([]);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    });
  };
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        <em>(Only images will be accepted)</em>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>
          {documents.map(({ path, size }) => (
            <li key={path}>
              {path} - {size} bytes
            </li>
          ))}
        </ul>
      </aside>
      <select name="album" id="album-select" ref={selectEl}>
        <option value="travel">Travel</option>
        <option value="personal">Personal</option>
        <option value="food">Food</option>
        <option value="nature">Nature</option>
        <option value="other">Other</option>
      </select>
      <button onClick={upload} disabled={documents.length === 0}>
        Upload
      </button>
    </>
  );
}

export default Uploader;
