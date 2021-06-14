import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
    return (
        <ImageBackground source={require('./assets/img/bg.png')} style={{flex:1}}>
            <Text>Home</Text>
        </ImageBackground>

    )
}

export default HomeScreen