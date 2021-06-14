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
  TextInput
 } from 'react-native'

import { Input } from 'react-native-elements';

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
    return (
        <ImageBackground source={require('./assets/img/bg.png')} style={{flex:1}}>
            <View 
            style={{
                flexDirection: 'column',
                height: 200, 
                backgroundColor: '#FFF7', 
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30,
                borderRadius: 10,
                padding: 16,
                }}>
                {/* Username Input */}
                <View style={{flexDirection: 'row'}}>
                    {/* Icon */}
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
                </View>

                {/* Password Input */}
                <View style={{flexDirection: 'row'}}>
                    {/* Icon */}
                    <View style={{
                        width: 30, 
                        height: 30, 
                        backgroundColor: 'red', 
                        borderRadius: 15
                        }} />
                        <Input 
                        secureTextEntry
                        placeholder="Password" 
                        containerStyle={{flex: 1}} 
                        />                            
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen