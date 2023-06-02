import { useState } from "react";
import { Content } from "./ItensList.styles";
import Item from "../Item";

const ItensList = () => {

  const [itens, setItens] = useState(["test", "Potato"]);

  return (
    <Content>
      {
        itens.map((toDo, index) => {
          return <Item key={index} ContentList={toDo} id={index} name={index} />;
        })
      }
    </Content>
  )
}

export default ItensList;