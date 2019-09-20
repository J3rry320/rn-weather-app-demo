import React, {PureComponent, Fragment} from 'react';
import {Text} from 'react-native';
import AppHeader from '../components/Header';
import Textbox from '../components/Input';

export class LandingPage extends PureComponent {
  render() {
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

export default LandingPage;
