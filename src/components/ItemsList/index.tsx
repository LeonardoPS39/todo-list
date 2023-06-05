import React from "react";
import { Content } from "./ItemsList.styles";
import Item from "../Item";

interface IProps extends React.PropsWithChildren {
  items: string[];
  removeItem: (index: number) => void
}

const ItensList = ({ items, removeItem }: IProps) => {
  return (
    <Content>
      {
        items.map((item, index) => {
          return (
            <Item 
              key={`todo-item-${index}`} 
              id={`item-todo-index-${index}`} 
              removeItem={() => removeItem(index)}
            >
              {item}
            </Item>
          );
        })
      }
    </Content>
  )
}

export default ItensList;