import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, verticalScale} from '../../../utils/scaleMetrics';
import Carousel from 'react-native-reanimated-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;

const DetailPhysicalEventScreen = ({route, navigation}) => {
  const detailEvent = {
    id: '1',
    photos: [
      {
        id: 1,
        description: 'kard and its members',
        imgUrl: 'https://kpopmas.com/wp-content/uploads/2021/07/kard.jpg',
      },
      {
        id: 2,
        description: 'kard concert',
        imgUrl: 'https://kpopmas.com/wp-content/uploads/2021/07/kard.jpg',
      },
      {
        id: 3,
        description: 'kard girls',
        imgUrl:
          'https://0.soompi.io/wp-content/uploads/sites/8/2018/08/10213634/KARD.png?s=900x600&e=t',
      },
    ],
  };

  /* 2. Get the param */
  const {id, cost, date, description, artist, city} = route.params;

  return (
    <SafeAreaView
      key={id}
      style={{
        flexDirection: 'column',
        backgroundColor: '#2E364C',
        height: '100%',
      }}>
      <ScrollView>
        <View style={{}}>
          <TouchableOpacity
            style={{zIndex: 2, position: 'absolute', right: 10, top: 10}}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="closecircleo" color={'white'} size={25} />
          </TouchableOpacity>
          <Image
            style={styles.img}
            source={{
              uri: 'https://0.soompi.io/wp-content/uploads/sites/8/2018/08/10213634/KARD.png?s=900x600&e=t',
            }}
          />
          <View style={{position: 'absolute', top: 160, left: 20}}>
            <Text style={styles.textTitle}>{artist}</Text>
            <Text style={styles.textMain}>Concert: Coliseo Rumiñahui</Text>
          </View>
          <View style={styles.blockCost}>
            <Text> $ {cost} </Text>
          </View>
          <View
            style={styles.blockInformation}>
            <View>
            <Text style={styles.textArtist}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            <Text style={styles.textArtist}>Schedule</Text> 
            <View>
              <Text>{date}</Text>
              <Text> 4 pm a 6 pm</Text>
            </View>
            <View>
              <Text>Ecuador</Text>
              <Text> Quito</Text>
            </View>
            <Text style={styles.textArtist}>Address</Text> 
            <View>
              <Text>Francisco de Orellana y Alpallana, 234.</Text>

            </View>
            <Text style={styles.textArtist}>Tickets and Prices</Text> 
            <ScrollView horizontal>
              

            </ScrollView>
          
            </View>
            
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          console.log(`Go to choose tickets screen: ${id}`);
          navigation.navigate('Choose ticket', {
            id,
            cost,
            date,
            description,
            artist,
            city,
          });
        }}>
        <Text style={styles.textType}> Look for passes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailPhysicalEventScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  block: {
    width: '100%',
    padding: 0,
    paddingBottom: 0,
  },
  img: {
    padding: 0,
    margin: 0,
    width: width,
    height: verticalScale(180),
    zIndex: 0,
    position: 'absolute',
    top: 0,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '100%',
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  blockCost: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 10,
    top: moderateScale(160),
    padding: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    width: moderateScale(70),
    alignItems: 'center',
  },
  onSite: {
    backgroundColor: 'black',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
    borderRadius: 4,
    width: moderateScale(70),
    alignItems: 'center',
  },
  textType: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  costBlock: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    width: moderateScale(70),
    padding: 5,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    height: verticalScale(40),
    width: '80%',
    padding: 5,
    borderRadius: 4,
    margin: 3,
  },
  descriptionBlock: {
    width: moderateScale(170),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  infoBlock: {
    width: moderateScale(130),
    padding: 0,
    flexDirection: 'column',
  },
  textArtist: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textCity: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  textDate: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  textMain: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  blockInformation: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginBottom: moderateScale(50),
    backgroundColor: '#6C141B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginVertical: verticalScale(165),
    borderColor: 'black',
    borderWidth: 1,
    height: 300,
  },
});
