// A JS file to polyfill some functions that PouchDB needs
console.log("run");
// import { decode, encode } from "base-64";

// if (!global.btoa) {
//   global.btoa = encode;
// }

// if (!global.atob) {
//   global.atob = decode;
// }

// // Avoid using node dependent modules
// process.browser = true;

import PouchDB from "@craftzdog/pouchdb-core-react-native";
import HttpPouch from "pouchdb-adapter-http";
import replication from "@craftzdog/pouchdb-replication-react-native";
import mapreduce from "pouchdb-mapreduce";

import SQLite from "expo-sqlite";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);

const polyFilledPouchDB = PouchDB.plugin(HttpPouch)
  // .plugin(replication)
  // .plugin(mapreduce)
  .plugin(SQLiteAdapter);

export default polyFilledPouchDB;
