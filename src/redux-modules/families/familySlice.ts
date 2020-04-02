import reduxToolkit from "@reduxjs/toolkit";
import uuid from 'uuid/v4';

// I have alternative methods of deleting 

const familySlice = reduxToolkit.createSlice({
  name: "familyList",
  initialState: {},
  reducers: {
    addFamily: (state, action) => {
      const { family } = action.payload;
      state[uuid()] = family;
      return state;
    },
    addFamilyMember: (state, action) => {
      const { familyId, personId } = action.payload;
      // Add saga to get person from peopleSlice
      state[familyId].familyMembers.push({ name: "dummyObject", age: 1337, personId });
      return state;
    },
    removeFamily: (state, action) => {
      const { familyId } = action.payload;
      // state[familyId] = undefined;
      delete state[familyId];
      return state;
    }
  }
});

export const {
  addFamily,
  addFamilyMember,
  removeFamily
} = familySlice.actions;

export default familySlice.reducer;