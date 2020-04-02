import reduxToolkit from "@reduxjs/toolkit";

const deaconSlice = reduxToolkit.createSlice({
  name: "deacons",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    add(state, action) {
      // TODO: Test if you can directly mutate state
      return state + action.payload.value;
    }
  }
});

export const {
  increment,
  decrement,
  add
} = deaconSlice.actions;

export default deaconSlice.reducer;