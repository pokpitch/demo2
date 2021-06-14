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

interface RegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = (props) => {
    return (
        <ImageBackground source={require('./assets/img/bg.png')} style={{flex:1}}>
            {/* Authen Section */}
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
                    icon='user' 
                    hint='Username'
                    onChanged={text => console.log('Username: ' + text)}
                    />

                {/* Password Input */}
                <StreamEntry 
                    icon='lock' 
                    hint='Password' 
                    isPassword={true}
                    onChanged={text => console.log('Password: ' + text)}
                    />

                <View style={{marginTop: 30}} />
                <Button title="Regiter" onPress={() => {
                    Alert.alert('Register clicked')
                }} />

                <View style={{marginTop: 16}} />
                <TouchableOpacity style={{height: 30}}>
                    <Text style={{textAlign: 'center'}}>Cancel</Text>
                </TouchableOpacity>

            </View>

            {/* Banner */}
            <Image
            resizeMode='contain' 
            source={require('./assets/img/header_react_native.png')} 
            style={{width: '100%'}}
            />
        </ImageBackground>
    )
}

export default RegisterScreen

type StreamEntryProps = {
    icon: string;
    hint: string;
    isPassword?: boolean
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