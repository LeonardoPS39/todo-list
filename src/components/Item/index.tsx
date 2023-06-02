import { Button } from "../../styles";
import { Content, MarkContent, MarkButton, TaskItem } from "./Item.styles";

interface IProps extends React.PropsWithChildren {
  id: string;
  removeItem: () => void
}

const Item = ({ id, children, removeItem }: IProps) => {
  return (
    <Content>
      <MarkContent>
        <MarkButton id={id} type="checkbox" />
        <TaskItem htmlFor={id}>{children}</TaskItem>
      </MarkContent>
      <Button onClick={removeItem}>
        Remove
      </Button>
    </Content>
  )
}

export default Item;