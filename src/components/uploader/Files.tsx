import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.25rem;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border: 2px solid #41403e;
  padding: 0.2rem;
  margin: 0.1rem 0;
`;

interface FilesProps {
  data: any[];
}

export default function Files(props: FilesProps) {
  const { data } = props;
  if (data.length === 0) return null;
  return (
    <div>
      <Label>Files</Label>
      <Ul>
        {data.map(({ path, size }) => (
          <Li key={path}>
            {path} - {size} bytes
          </Li>
        ))}
      </Ul>
    </div>
  );
}
