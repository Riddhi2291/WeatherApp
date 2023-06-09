import React, { Component } from 'react';
import { StyleSheet, Image, View, Alert, TouchableOpacity } from 'react-native';
import FontText from '../../components/FontText';
import colors from '../../assets/colors';
import { isX, normalize, hp, wp } from '../../helper/responsiveScreen';
import MapView from 'react-native-maps';
import NavigationBar from '../../components/NavigationBar';
import {iconUrl} from '../../helper/appConstant';

export const routeName = 'weatherDetail';

class WeatherDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weatherData: props.route.params && props.route.params.weatherData,
    }
  }

  componentDidMount() {
    console.log('weatherData', this.state.weatherData)
  }

  componentWillUnmount() {
  }

  render() {
    const { weatherData } = this.state
    return (
      <View style={styles.container}>

        <NavigationBar
          bgColor="green"
          style={{ paddingVertical: hp(2) }}
          hasLeft
          hasCenter
          hasRight
          left={
            <TouchableOpacity
              style={{ padding: wp(2) }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image source={require('../../assets/images/back.png')} resizeMode="contain" style={styles.backImage} />
            </TouchableOpacity>
          }
          center={
            <FontText size={normalize(18)} name={'roboto-regular'} color="white" textAlign='center' >{`WeatherApp`}</FontText>
          }
          right={null}
        />

        <View style={styles.mapContainer}>
          <MapView
            ref={r => this.mapRef = r}
            style={styles.mapView}
            region={{
              latitude: weatherData?.coord?.lat,
              longitude: weatherData?.coord?.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >
            <MapView.Marker
              coordinate={{
                latitude: weatherData?.coord?.lat,
                longitude: weatherData?.coord?.lon,
              }}
              title={weatherData?.name}
            />
          </MapView>
        </View>

        <View style={styles.childContainer}>

          <View>
            <FontText size={normalize(20)} name={'roboto-regular'} color="black" style={{ fontWeight: 'bold' }} >{weatherData?.name}</FontText>
            <FontText size={normalize(18)} name={'roboto-regular'} color="black" style={{ marginTop: hp(0.5) }} >{weatherData?.weather[0]?.description}</FontText>
            <FontText size={normalize(18)} name={'roboto-regular'} color="black" style={{ marginTop: hp(0.5) }} >{`Humidity: ${weatherData?.main?.humidity}`}</FontText>
            <FontText size={normalize(18)} name={'roboto-regular'} color="black" style={{ marginTop: hp(0.5) }} >{`Wind Speed: ${weatherData?.wind?.speed}`}</FontText>
            <FontText size={normalize(18)} name={'roboto-regular'} color="black" style={{ marginTop: hp(0.5) }} >{`Max.Temp.: ${weatherData?.main?.temp_max}°C`}</FontText>
            <FontText size={normalize(18)} name={'roboto-regular'} color="black" style={{ marginTop: hp(0.5) }} >{`Min.Temp.: ${weatherData?.main?.temp_min}°C`}</FontText>
          </View>

          <View style={styles.imageViewContainer}>
            <FontText size={normalize(24)} name={'roboto-regular'} color="black" style={{ marginTop: hp(3), fontWeight: 'bold' }} >{`${weatherData?.main?.temp}°C`}</FontText>
            <Image source={{ uri: `${iconUrl}${weatherData?.weather[0]?.icon}.png` }}
              style={styles.weatherIcon} resizeMode={"contain"} />
          </View>
        </View>

      </View >
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isX ? hp(4) : hp(0),
    backgroundColor: colors.white
  },
  backImage: {
    width: wp(5),
    height: hp(2.5),
    tintColor: colors.white
  },
  mapContainer: {
    marginBottom: hp(2),
  },
  mapView: {
    width: '100%',
    height: hp(60),
    alignSelf: 'center'
  },
  childContainer: {
    height: hp(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  imageViewContainer: {
    width: wp(30),
    alignItems: 'center'
  },
  weatherIcon: {
    width: wp(15),
    height: wp(15),
  },
});

export default WeatherDetail;