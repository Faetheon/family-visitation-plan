import React from 'react';
import { Text, SafeAreaView, StyleSheet } from "react-native";
import TabNavigator from '../components/TabNavigator';

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

const VisitationList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Text>Visitation List</Text>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default VisitationList;