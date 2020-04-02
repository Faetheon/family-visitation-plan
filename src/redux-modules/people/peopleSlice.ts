import reduxToolkit from "@reduxjs/toolkit";
import uuid from 'uuid/v4';

const peopleSlice = reduxToolkit.createSlice({
  name: "people",
  initialState: [],
  reducers: {
    // Demo for jsdocs, lemme know if this looks good or what you want it too look like.

    /** @function addPerson 
     * @param action The action object contains the type and payload properties.
     *  @property {object} action.payload                  -- The payload of the action.
     *    @property {object} action.payload.person         -- The person object.
     *      @property {uuid} action.payload.person._id     -- The id of the person.
     *      @property {string} action.payload.person.name  -- The name of the person.
     *      @property {string} action.payload.person.age   -- The age of the person.
     *    @property {uuid | null} action.payload.familyId  -- The id of the family the person belongs too.
     *  @property {string} action.type                     -- The type of action.
     */
    addPerson(state, action) {
      // TODO: Test if you can directly mutate state
      // I edited state directly but didn't get an error or warning. 
      // I think we're good?
      const { person, familyId } = action.payload;
      state.push({ _id: uuid(), person, familyId: familyId || null });
      return state;
    }
  }
});

export const {
  addPerson
} = peopleSlice.actions;

export default peopleSlice.reducer;