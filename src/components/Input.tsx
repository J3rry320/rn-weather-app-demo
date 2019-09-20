import React, {PureComponent} from 'react';
import {Container, Header, Content, Item, Input} from 'native-base';
interface IInputProps {
  placeholder: string;
  onChange: () => void;
}
export default class Textbox extends PureComponent<IInputProps> {
  render() {
    const {placeholder, onChange} = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Item rounded>
            <Input placeholder={placeholder} onChange={onChange} />
          </Item>
        </Content>
      </Container>
    );
  }
}
