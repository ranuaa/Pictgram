import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const stories = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1663877174990-b1589bcdd411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1663188656523-42bc652688fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1663524789625-b8d2ed6cac2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1663757777013-f35ed4995a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1659482633320-c6068b877e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxODd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '7',
    uri: 'https://images.unsplash.com/photo-1662695089339-a2c24231a3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '8',
    uri: 'https://images.unsplash.com/photo-1662695094714-966fc339a2e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '9',
    uri: 'https://images.unsplash.com/photo-1663717249302-40e087724495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '10',
    uri: 'https://images.unsplash.com/photo-1663717249250-804cb861ed74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
]

const StoryList = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.Container}>
      <View style={styles.StoryContainer}>
        <View style={{ position: 'relative' }}>
          <ProfileHead
            uri={'https://media-exp1.licdn.com/dms/image/C5603AQFKnqi1NnQQDw/profile-displayphoto-shrink_200_200/0/1659274282897?e=1669248000&v=beta&t=3YPB3zLqK587PEOSKj1a3tPwyq5Dn6VVr1-Qi8LITMM'}
          />
          <AntDesign
            name="pluscircle"
            size={20}
            color="darkblue"
            style={{
              position: 'absolute',
              top: '75%',
              left: '60%',
              backgroundColor: 'white',
              borderRadius: 100 / 2,
            }}
          />
        </View>
        {stories.map((story) => {
          return (
            <ProfileHead key={story.id} uri={story.uri} />
          )
        })}
      </View>
    </ScrollView>
  )
}

const ProfileHead = ({ uri }) => {
  return (
    <View style={styles.StoryPofile}>
      <Image
        source={{
          uri,
        }}
        style={styles.StoryPofileImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  StoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  StoryPofile: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: 'hsla(333, 100%, 53%, 1)',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  StoryPofileImage: {
    width: '95%',
    height: '95%',
    borderRadius: 80 / 2,
  },
})
export default StoryList