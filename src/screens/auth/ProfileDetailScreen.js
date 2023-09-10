/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../components/Header';

const ProfileDetailScreen = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title={'Profile Detail'}
        backIcon={true}
      />
      <View style={{marginBottom: '20%'}}>
        <Image
          source={{uri: user?.author?.image}}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>{user?.author?.username}</Text>
        <Text style={styles.bio}>{user?.author?.bio}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('FriendList')}
        style={styles.profileOptionView}>
        <Text style={styles.profileOptionText}>Friends list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={[
          styles.profileOptionView,
          {
            marginTop: '5%',
          },
        ]}>
        <Text style={styles.profileOptionText}>Setting</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: '10%',
    alignSelf: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c2c2c2',
    alignSelf: 'center',
  },
  bio: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#c2c2c2',
    marginTop: 10,
  },
  profileOptionView: {
    backgroundColor: '#0c0f13',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  profileOptionText: {color: 'white', fontWeight: 'bold', fontSize: 20},
});

export default ProfileDetailScreen;
