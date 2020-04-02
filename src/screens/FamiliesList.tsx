import React from 'react';
import { Text, SafeAreaView } from "react-native";
import { addFamily, removeFamily } from '../redux-modules/families/familySlice';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';


const FamiliesList = ({ navigation }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Families List</Text>
      {/* Map out families here */}
      <Button title="Add Family" onPress={() => { /* dispatch(addFamily({familyData})) */ }} />
      <Button title="Delete Family" onPress={() => { /* dispatch(removeFamily({{familyId: familyId}})) */ }} />
    </SafeAreaView>
  );
};

export default FamiliesList;