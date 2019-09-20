import React, {PureComponent} from 'react';
import {Text, Spinner} from 'native-base';
import {connect} from 'react-redux';
interface IWeatherDataProps {
  weatherResults: Weatherapp.IWeatherReducers;
}
export class WeatherData extends PureComponent<IWeatherDataProps> {
  render() {
    const {weatherResults} = this.props;
    return weatherResults.weatherResultsLoading ? <Spinner /> : <Text>Hello from </Text>;
  }
}
function mapStateToProps({weatherResults}: Weatherapp.IAppState) {
  return {
    weatherResults,
  };
}

export default connect(mapStateToProps)(WeatherData);
