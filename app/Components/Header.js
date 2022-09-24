import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      <View style={style.container}>
        <Image
          style={style.logo}
          source={require('../../assets/logo.png')}
        />
        <Ionicons name="ios-chatbubble-ellipses-sharp" size={24} color="black" />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  }
})
export default Header