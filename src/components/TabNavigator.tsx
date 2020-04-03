import React from 'react';
import { SafeAreaView, StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row'
  },
  tabOption: {
    borderRadius: 0,
  }
});

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.tabNavigatorContainer}>
      <View style={styles.tabBar}>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
          buttonStyle={styles.tabOption}
        />
        <Button
          title="Family List"
          onPress={() => navigation.navigate("Family List")}
          buttonStyle={styles.tabOption}
        />
        <Button
          title="Deacon List"
          onPress={() => navigation.navigate("Deacon List")}
          buttonStyle={styles.tabOption}
        />
        <Button
          title="Visit List"
          onPress={() => navigation.navigate("Visit List")}
          buttonStyle={styles.tabOption}
        />
      </View>
    </SafeAreaView>
  );
};

export default TabNavigator;