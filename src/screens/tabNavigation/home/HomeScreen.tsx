import {View, Text, SafeAreaView, TouchableHighlight} from 'react-native';
import React from 'react';
import Card from '../../../components/eventCard/Card';
import { CardProps } from '../../../components/types/types';

function HomeScreen(eventsList: any) {
  return (
    <SafeAreaView>
      <View></View>
      <View>
        <TouchableHighlight>
          <Text>Virtual</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>Physical</Text>
        </TouchableHighlight>
      </View>
      <View>
        {/* {eventsList.map( (event:any) => (
          <Card
            img={event.img}
            id={event.id}
            cost={event.cost}
            type={event.type}
            description={event.description}
            artist={event.artist}
            city={event.city}
            date={event.date}
          />
        ))} */}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
