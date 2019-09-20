import React, {PureComponent, Fragment} from 'react';
import {Text, StyleSheet} from 'react-native';
import AppHeader from '../components/Header';
import Textbox from '../components/Input';
import {Dispatch} from 'redux';
import {searchWeatherForCity} from '../store/actions/Search_Actions';
import {connect} from 'react-redux';
import {Button, View} from 'native-base';
import AppButton from '../components/Button';
import WeatherCard from '../components/WeatherCard';
import {NavigationAction, NavigationScreenProps} from 'react-navigation';
interface ILandingPageProps extends NavigationScreenProps {
  searchWeather: (cityName: string) => void;
  weatherResults: Weatherapp.IWeatherReducers;
}
export class LandingPage extends PureComponent<ILandingPageProps> {
  state = {
    cityName: '',
  };
  render() {
    const {cityName} = this.state;
    const {searchWeather, navigation, weatherResults} = this.props;
    return (
      <Fragment>
        <AppHeader />
        <Text style={styles.headerText}>Check local weather instantly</Text>
        <View style={styles.centerContent}>
          <Textbox
            value={cityName}
            placeholder="Enter the name of city"
            onChange={cityName => {
              this.setState({
                cityName,
              });
            }}
          />

          <AppButton
            text="Search"
            onClick={async () => {
              await searchWeather(cityName);
              !weatherResults.weatherResultsLoading && navigation.navigate('weatherData');
            }}
          />
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 10,
    letterSpacing: 4,
  },
});
function mapStateToProps({weatherResults}: Weatherapp.IAppState) {
  return {
    weatherResults,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    searchWeather: (cityName: string) => dispatch(searchWeatherForCity(cityName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
