import React, {PureComponent} from 'react';
import {Container, Header, Content, Item, Input, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {globalStyles} from '../styles';
interface IInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}
export default class Textbox extends PureComponent<IInputProps> {
  render() {
    const {placeholder, onChange, value} = this.props;
    return (
      <View style={globalStyles.padding}>
        <Item rounded>
          <Input
            value={value}
            placeholder={placeholder}
            onChangeText={cityName => onChange(cityName)}
          />
        </Item>
      </View>
    );
  }
}
