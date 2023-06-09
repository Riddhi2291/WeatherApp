import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather, { routeName as wetherRouteName } from '../containers/Weather';
import WeatherDetail, { routeName as weatherDetailRouteName } from '../containers/WeatherDetail';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

export class routes extends Component {

  componentDidMount() {
      SplashScreen.hide();
      StatusBar.setHidden(false);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={wetherRouteName} component={Weather} />
          <Stack.Screen name={weatherDetailRouteName} component={WeatherDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// get the navigator passing the initial route name
export default routes;