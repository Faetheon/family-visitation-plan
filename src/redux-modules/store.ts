import reduxToolkit from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import deaconReducer from "./deacons/deaconSlice";
import { deaconSagas } from "./deacons/deaconSagas";
import familyReducer from './families/familySlice';
import { familySagas } from './families/familySagas';

const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
  reducer: {
    deaconSlice: deaconReducer,
    familySlice: familyReducer
  },
  middleware: [sagaMiddleware]
});

const sagas = [
  ...deaconSagas,
  ...familySagas
];
sagas.forEach(sagaMiddleware.run);

export default store;
