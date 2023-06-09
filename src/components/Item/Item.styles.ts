import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  margin-inline: 16px;
`;

export const MarkContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MarkButton = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin-right: 6px;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #000;
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const TaskItem = styled.label`
  color: #FFF;

  user-select: none;
`;