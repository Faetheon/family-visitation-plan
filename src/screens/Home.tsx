import React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from 'react-native-elements';
import ProfileButton from '../components/ProfileButton';
import TabNavigator from '../components/TabNavigator';

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <ProfileButton />
      <Text>Home</Text>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default Home;