import React from 'react';
import { Text, SafeAreaView, StyleSheet } from "react-native";
import TabNavigator from '../components/TabNavigator';
import ProfileButton from '../components/ProfileButton';

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

const FamiliesList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <ProfileButton />
      <Text>Families List</Text>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default FamiliesList;