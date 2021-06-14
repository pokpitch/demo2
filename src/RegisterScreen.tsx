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
                <StreamEntry/>

                {/* Password Input */}
                <StreamEntry/>

                <View style={{marginTop: 30}} />
                <Button title="Regiter" onPress={() => {}} />

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

// Custom input component
const StreamEntry = () => {
    return (                
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{
            width: 30, 
            height: 30, 
            backgroundColor: 'green', 
            borderRadius: 15
            }} />
            <Input
                keyboardType="email-address" 
                placeholder="Username" 
                containerStyle={{flex: 1}} 
            />                            
    </View>)
}