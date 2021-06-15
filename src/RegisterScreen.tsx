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
import { Input } from 'react-native-elements';
import { AccountType } from './types/account.interfeace';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigationParams';
import {useNavigation} from '@react-navigation/native';

interface RegisterScreenProps {}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = (props) => {

    const [account, setAccount] =  React.useState<AccountType>({
        username: '', 
        password: ''
    });

    const navigation = useNavigation<HomeScreenNavigationProp>();

    // Listen component did mount
    React.useEffect(() => {
        setNavigationOption();
    }, []);

    // Initial navigation option
    const setNavigationOption = () => {
        navigation.setOptions({
        title: 'Register',
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
        });
    };
        
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
        <StreamEntry
          icon="user"
          hint="Username"
          onChanged={text => {
            setAccount({...account, username: text});
            console.log('Username: ' + account.username);
          }}
        />

        {/* Password Input */}
        <StreamEntry
          isPassword={true}
          icon="lock"
          hint="Password"
          onChanged={text => {
            setAccount({...account, password: text});
            console.log('Password: ' + account.password);
          }}
        />

        <Text>Debug: {JSON.stringify(account)}</Text>

        <View style={{marginTop: 30}} />
        <Button
          title="Register"
          onPress={() => {
            Alert.alert(JSON.stringify(account));
          }}
        />

        <View style={{marginTop: 16}} />
        <TouchableOpacity
          style={{height: 30}}
          onPress={() => navigation.goBack()}>
          <Text style={{textAlign: 'center'}}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
        style={{width: '100%'}}
      />
    </ImageBackground>
  );
}; 

export default RegisterScreen

type StreamEntryProps = {
    icon: string;
    hint: string;
    isPassword?: boolean;
    onChanged: (text: string) => void
};

// Custom input component
const StreamEntry: React.FC<StreamEntryProps> = props => {
    return (                
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon 
            name={props.icon} 
            size={35} 
            color="#0006" 
            style={{marginRight: 8}} 
            />
            <Input
                onChangeText={props.onChanged}
                secureTextEntry={props.isPassword} 
                keyboardType={props.isPassword ? 'default' : 'email-address'}
                placeholder={props.hint}
                containerStyle={{flex: 1}} 
            />                            
    </View>)
}