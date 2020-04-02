import reduxToolkit from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import deaconReducer from "./deacons/deaconSlice";
import { deaconSagas } from "./deacons/deaconSagas";
import familyReducer from './families/familySlice';
import { familySagas } from './families/familySagas';
import peopleReducer from "./people/peopleSlice";
import { peopleSagas } from "./people/peopleSagas";

const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
  reducer: {
    deaconSlice: deaconReducer,
    familySlice: familyReducer,
    peopleSlice: peopleReducer
  },
  middleware: [sagaMiddleware]
});

const sagas = [
  ...deaconSagas,
  ...familySagas,
  ...peopleSagas
];

sagas.forEach(sagaMiddleware.run);

export default store;
