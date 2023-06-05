import React, { useState } from 'react'
import { Content, Input } from "./ToDoInput.styles";
import { Button } from '../../styles';

interface IProps extends React.PropsWithChildren {
  onSubmit: (value: string) => void
}

const ToDoInput = ({ onSubmit }: IProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <Content>
      <Input 
        value={value} 
        onChange={(event) => setValue(event.target.value)} 
      />
      <Button onClick={() => onSubmit(value)}>
        Submit
      </Button>
    </Content>
  )
}

export default ToDoInput;