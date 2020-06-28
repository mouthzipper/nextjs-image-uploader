import * as React from 'react';
import styled from 'styled-components';
const Select = styled.select`
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  transition: all 235ms ease-in-out 0s;
  align-self: center;
  background: 0 0;
  border: 2px solid #41403e;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  outline: 0;
  padding: 0.75rem;
  width: 200px;
  margin-right: 20px;
`;

interface ComponentProps {
  refEl: any;
}
export default function AlbumSelector(props: ComponentProps) {
  const { refEl } = props;
  return (
    <Select name="album" id="album-select" ref={refEl}>
      <option value="travel">Travel</option>
      <option value="personal">Personal</option>
      <option value="food">Food</option>
      <option value="nature">Nature</option>
      <option value="other">Other</option>
    </Select>
  );
}
