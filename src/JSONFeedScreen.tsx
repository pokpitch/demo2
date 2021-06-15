import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  ShadowPropTypesIOS,
} from 'react-native';
import axios from 'axios';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RootTabParamList} from './RootNavigationParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { YoutubeResult } from './types/youtube.interface';

interface JSONFeedScreenProps {}

const JSONFeedScreen: React.FunctionComponent<JSONFeedScreenProps> = props => {

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log('JSON Created');
    let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;
    let result = await axios.post<YoutubeResult>(url, data);
    console.log(result.data.youtubes[0].title);
  };

  return (
    <ImageBackground 
    style={{flex: 1}} 
    source={require('./assets/img/bg.png')}>
      <FlatList
      style={styles.container}
      data={[]}
      renderItem={({item, index})=>(<Text>{item}</Text>)}
      keyExtractor={item => String(Math.random())}
      />
    </ImageBackground>
  );
};

export default JSONFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});