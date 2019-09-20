import React, {PureComponent} from 'react';
import {Container, Left, Header, Body, Title, Right} from 'native-base';
export class AppHeader extends PureComponent {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
