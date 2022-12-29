import {ActionMatcherDescription} from '@reduxjs/toolkit/dist/createReducer';
import {Image} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Card = ({cost, type, description, artist, city, date, img, id}: any) => {
  return (
    <View style={styles.container} key={id}>
      <View>
        <Image source={{uri: img}} style={styles.img} />
        {type === 'online' ? (
          <View style={styles.online}>
            <Text>Online</Text>{' '}
          </View>
        ) : (
          <View style={styles.onSite}>
            {' '}
            <Text>On Site</Text>
          </View>
        )}
        <View>
          <Text> {cost}</Text>
        </View>
      </View>

      <View style={styles.description}>
        <View>
          <View>
            <Text> {artist} </Text>
            <Text> {city} </Text>
          </View>
          <View>
            <Text>{date}</Text>
          </View>
        </View>
        <View>
          <Text> {description}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '80%',
  },
  description: {
    flexDirection: 'row',
  },
  online: {
    backgroundColor:'red'
  },
  onSite: {
    backgroundColor:'blue'
  },
  btn: {
    backgroundColor:'green'
  },
});
