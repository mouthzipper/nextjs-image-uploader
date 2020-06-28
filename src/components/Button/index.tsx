import styled from 'styled-components';

const Button = styled.button`
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  transition: all 235ms ease-in-out 0s;
  align-self: flex-start;
  background: ${(props) => (props.isActive ? '#c1d3df' : '0 0')};
  border: 2px solid #41403e;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  outline: 0;
  padding: ${(props) => props.padding || '0.75rem'};
`;

export default Button;
