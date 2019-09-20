import React, {PureComponent} from 'react';
import {Button, Text, View} from 'native-base';
import {globalStyles} from '../styles';
import {StyleSheet} from 'react-native';
interface IButtonProps {
  text: string;
  onClick: () => void;
}
export class AppButton extends PureComponent<IButtonProps> {
  render() {
    const {text, onClick} = this.props;
    return (
      <View style={globalStyles.padding}>
        <Button rounded primary onPress={onClick}>
          <Text style={styles.alignText}>{text}</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  alignText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default AppButton;
