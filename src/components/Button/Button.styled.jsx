import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 12px 8px 4px #cab1b14d;

  border: ${props =>
    props.status === 'search'
      ? 'none'
      : props.status === 'load'
        ? '1px solid rgba(39, 118, 214, 0.5)'
        : 'grey'};

  background-color: ${props =>
    props.status === 'search'
      ? 'rgba(39, 118, 214, 0.5)'
      : props.status === 'load'
        ? 'transparent'
        : 'grey'};

  color: ${props =>
    props.status === 'search'
      ? 'hsla(0, 0%, 100%, 1)'
      : props.status === 'load'
        ? 'black'
        : 'grey'};

  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: white;
    background-color: rgba(39, 118, 214, 0.5);
    border: none;
  }

  & > svg {
    margin-right: 8px;
  }
`;
