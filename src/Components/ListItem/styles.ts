import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Label = styled.label<{ done: boolean }>`
  color: #ccc;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'initial')};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    border: 2px solid #b2beb5;
    background-color: #b2beb5;
  }
`;
