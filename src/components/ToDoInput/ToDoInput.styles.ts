import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  gap: 12px;
  
  margin-bottom: 10px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(255, 255, 255, 1);
  color: #FFF;
  border-radius: 20px;
  font-size: 16px;
  padding: 4px 12px;
  background-color: transparent;
  
  &:focus {
    border: 1px solid #FFEA00;
  }
`;
