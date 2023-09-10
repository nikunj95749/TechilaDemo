import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Header} from '../../components/Header';

const FriendsListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Friends List'} backIcon={true} />
      <Text style={styles.settingText}>Friends List Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  settingText: {
    marginTop: '70%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c2c2c2',
    alignSelf: 'center',
  },
});
export default FriendsListScreen;
