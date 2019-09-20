import React, {PureComponent, Fragment} from 'react';
import {Text} from 'react-native';
import AppHeader from '../components/Header';
import Textbox from '../components/Input';
import {Dispatch} from 'redux';
import {searchWeatherForCity} from '../store/actions/Search_Actions';
import {connect} from 'react-redux';
interface ILandingPageProps {
  weatherResults: Weatherapp.IWeatherReducers;
  searchWeather: (cityName: string) => void;
}
export class LandingPage extends PureComponent<ILandingPageProps> {
  componentDidMount() {
    this.props.searchWeather('London');
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <AppHeader />
        <Textbox
          placeholder="Enter the name of city"
          onChange={() => {
            console.warn('Changed');
          }}
        />
      </Fragment>
    );
  }
}
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
