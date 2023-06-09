import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontText from '../FontText';
import { wp, hp, normalize } from '../../helper/responsiveScreen';

const WeatherListItem = (props) => {
  const {
    data,
    onItemPress,
  } = props;


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onItemPress(data)}>

      <View style={styles.childContainer}>
        <FontText size={normalize(20)} name={'roboto-regular'} color="black" style={styles.weatherNameText}  >{data.name}</FontText>
        <FontText size={normalize(16)} name={'roboto-regular'} color="black" opacity={0.7} style={{...styles.weatherNameText, marginTop: hp(0.5) }} >{data.weather[0].description}</FontText>
      </View>

      <FontText size={normalize(26)} name={'roboto-regular'} color="black" style={{ fontWeight: 'bold' }} >{`${data.main.temp}°C`}</FontText>
    </TouchableOpacity>
  );
};

WeatherListItem.propTypes = {
  data: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  childContainer: {
    justifyContent: 'space-between'
  },
  weatherNameText: {
    width: wp(55)
  }

});

export default WeatherListItem;