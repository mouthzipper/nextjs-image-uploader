import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
`;
export default function Header() {
  return (
    <header>
      <Title>Image Uploader</Title>
    </header>
  );
}
