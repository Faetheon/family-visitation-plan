import PouchDB from '../utilities/pouchdb';

const db = new PouchDB("mydb", { adapter: "react-native-sqlite" });

export default db;
