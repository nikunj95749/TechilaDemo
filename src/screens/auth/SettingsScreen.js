import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Header} from '../../components/Header';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Setting'} backIcon={true} />
      <Text style={styles.settingText}>Settings Screen</Text>
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
export default SettingsScreen;
