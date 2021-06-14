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
                        }}/>                            
                    <TextInput 
                    placeholder='Username'
                    style={{
                        backgroundColor: '#0003', 
                        flex: 1, 
                        marginLeft: 16, 
                        paddingLeft: 16,
                        borderRadius: 5,
                        height: 40}}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen