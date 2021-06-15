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
} from 'react-native';
import axios from 'axios';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, RootTabParamList} from './RootNavigationParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

interface JSONFeedScreenProps {}

const JSONFeedScreen: React.FunctionComponent<JSONFeedScreenProps> = props => {
  return (
    <ImageBackground style={{flex: 1}} source={require('./assets/img/bg.png')}>
      <Text>CodeMobiles</Text>
    </ImageBackground>
  );
};

export default JSONFeedScreen;