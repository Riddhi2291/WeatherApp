import React, { Component } from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';
import FontText from '../../components/FontText';
import colors from '../../assets/colors';
import { isX, normalize, hp, wp } from '../../helper/responsiveScreen';
import WeatherList from '../../components/WeatherList';
import { routeName as weatherDetailRouteName } from '../WeatherDetail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherActions } from '../../actions/actions'
import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';

export const routeName = 'weather';

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.getWeatherCall()
    })
  }

  getWeatherCall = async () => {
    const { weather } = this.props
    await weather()
  }


  componentDidUpdate(prevProps) {
    const { error } = this.props;

    if (prevProps.error !== error) {
      alert(error.message)
    }
  }

  componentWillUnmount() {
    this.focusListener();
  }

  onItemPress = (item) => {
    const { navigation } = this.props
    // console.log('item', item)

    navigation.navigate(weatherDetailRouteName, {
      weatherData: item
    })

  }

  render() {
    const { processing, data } = this.props

    return (
      <View style={styles.container}>

        <NavigationBar
          bgColor="green"
          style={{ paddingVertical: hp(3) }}
          hasLeft
          hasCenter
          hasRight
          left={null}
          center={
            <FontText size={normalize(18)} name={'roboto-regular'} color="white" textAlign='center' >{`WeatherApp`}</FontText>
          }
          right={null}
        />
        <WeatherList weatherListData={data ? data : {}} onItemPress={(item) => this.onItemPress(item)} />
        <Loader
          loading={processing}
        />
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
});

const mapStateToProps = state => {
  const {
    weather: {
      error,
      success,
      processing,
      data
    },
  } = state;
  return {
    error,
    success,
    processing,
    data
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({

  weather: weatherActions.weather,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);