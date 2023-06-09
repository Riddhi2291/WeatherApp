import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View } from 'react-native';
import WeatherListItem from './WeatherListItem';
import { wp, hp, normalize } from '../../helper/responsiveScreen';

const WeatherList = (props) => {
  const {
    weatherListData,
    onItemPress,
  } = props;


  _renderItem = ({ item, index }) => {
    return (
      <WeatherListItem data={item} onItemPress={(item) => onItemPress(item)} />
    );
  };

  renderSeparator = () => (
    <View
      style={styles.sepator}
    />
  );


  return (
    <FlatList
      bounces={false}
      data={weatherListData.list}
      renderItem={this._renderItem}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false}
      style={styles.container}
      ItemSeparatorComponent={this.renderSeparator}
      contentContainerStyle={{paddingVertical: hp(1)}}
    />
  );
};

WeatherList.defaultProps = {
};

WeatherList.propTypes = {
  weatherListData: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sepator: {
    backgroundColor: '#E5E5E5',
    height: wp(0.3),
    marginVertical: hp(1.5)
  }
});

export default WeatherList;