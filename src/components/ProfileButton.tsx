import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Avatar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  profileView: {
    position: "absolute",
    right: 5,
    top: 50,
    zIndex: 1
  }
});

const ProfileButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileView}>
      {/* Photo by Joshua Fuller on Unsplash */}
      <Avatar
        size="small"
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.7}
      />
    </View>
  );
};

export default ProfileButton;
