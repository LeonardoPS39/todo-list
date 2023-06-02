import { Content, MarkButton, TaskItem } from "./Item.styles";

const Item = ({ContentList, id, name}: any) => {
  return (
    <Content>
      <MarkButton type="radio" id={id} name={name}></MarkButton>
      <TaskItem htmlFor={id} >{ContentList}</TaskItem>
    </Content>
  )
}

export default Item;