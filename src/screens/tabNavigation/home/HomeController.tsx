import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import HomeScreen from './HomeScreen';

const HomeController = () => {

  const exampleCards = [
    {
      cost: 45,
      type: 'online',
      description: 'The most important event in the year.',
      artist: 'KARD',
      city: 'Seoul',
      date: 'December 30th',
      img: 'https://firebasestorage.googleapis.com/v0/b/showapp-fbe93.appspot.com/o/banners%2FkardGroup.webp?alt=media&token=0db88ab1-4751-49e1-8506-c8fb47d5564e',
      id: '1',
    },
    {
      cost: 120,
      type: 'onSite',
      description: 'The most important event in the year in your city',
      artist: 'Bad Bunny',
      city: 'Quito',
      date: 'December 31st',
      img: 'https://firebasestorage.googleapis.com/v0/b/showapp-fbe93.appspot.com/o/banners%2FbadBunnyBanner.jpeg?alt=media&token=d13ef6a7-21e7-465c-b18f-ee336e73543a',
      id: '2',
    },
  ];

  return (
    <SafeAreaView>
        <HomeScreen eventsList={exampleCards} /> 
    </SafeAreaView>
  );
};

export default HomeController;
