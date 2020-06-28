import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 300px;
  margin-top: 30px;
`;

export default function Header() {
  return (
    <header>
      <Image src="/image-uploader.svg" alt="Image Uploader" />
    </header>
  );
}
