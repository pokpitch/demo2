import React from 'react'
import { 
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Alert,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TextInput,
  Text
 } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigationParams';

interface HomeScreenProps {}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
    React.useEffect(() => {
        console.log('Hey')
        setNavigationOption();
    }, []);

    const navigation = useNavigation<HomeScreenNavigationProp>();

    //Initial navigation option
    const setNavigationOption = () => {
        navigation.setOptions({
        title: 'Home',
        headerStyle: {
            backgroundColor: '#119CED',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {color: '#fff'},
        headerBackTitle: ' ',
        headerRight: () => (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Alert.alert('www.codemobiles.com')}
            style={{padding: 10}}>
            <Icon
                name="address-card"
                size={20}
                color="#fff"
                style={{
                height: 24,
                width: 24,
                }}
            />
            </TouchableOpacity>
        ),
        })
    }


    return (
        <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
        {/* authen section */}
        <View
            style={{
            flexDirection: 'column',
            backgroundColor: '#FFF7',
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 10,
            padding: 16,
            }}>
            {/* Username Input */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* icon */}
            <View
                style={{
                width: 30,
                height: 30,
                backgroundColor: 'green',
                borderRadius: 15,
                }}
            />
            <Input
                keyboardType="email-address"
                placeholder="Username"
                containerStyle={{flex: 1}}
            />
            </View>

            {/* Password Input */}
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            {/* icon */}
            <View
                style={{
                width: 30,
                height: 30,
                backgroundColor: 'red',
                borderRadius: 15,
                }}
            />
            <Input
                secureTextEntry
                placeholder="Password"
                containerStyle={{flex: 1}}
            />
            </View>

            <View style={{marginTop: 30}} />
            <Button title="Login" onPress={() => {}} />

            <View style={{marginTop: 16}} />
            <TouchableOpacity style={{height: 30}}>
            <Text style={{textAlign: 'center'}}>Register</Text>
            </TouchableOpacity>
        </View>

        {/* Banner */}
        <Image
            resizeMode="contain"
            source={require('./assets/img/header_react_native.png')}
            style={{width: '100%'}}
        />
        </ImageBackground>
    )
    }

export default HomeScreen