<<<<<<< HEAD
import reduxToolkit from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterSlice } from "./deacons";
import { counterSagas } from "./deacons/sagas";
import db from '../database/index';

db.info().then(function (info) {
  console.log(info);
});
=======
import reduxToolkit from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { deaconsSlice } from './deacons';
import { counterSagas } from './deacons/sagas';
>>>>>>> 7995794cb7f588fa70ba06310f258578d3ddf417

const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
	reducer: { deaconsSlice: deaconsSlice.reducer },
	middleware: [sagaMiddleware],
});

const sagas = [...counterSagas];
sagas.forEach(sagaMiddleware.run);

export default store;
