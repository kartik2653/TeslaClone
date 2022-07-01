/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        renderItem={({item}) => <CarItem car={item} />}
      />
    </View>
  );
};
export default CarsList;
