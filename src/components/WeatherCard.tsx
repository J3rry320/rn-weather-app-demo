import React, {PureComponent} from 'react';
import {View, Card, CardItem, Text, Body} from 'native-base';

export class WeatherCard extends PureComponent {
  render() {
    return (
      <View>
        <Card>
          <CardItem header>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>//Your text here</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default WeatherCard;
