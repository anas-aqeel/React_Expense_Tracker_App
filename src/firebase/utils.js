import { firebaseConfig } from "./config";
import {
  getDatabase,
  update,
  ref,
  push,
  remove,
  child
} from "firebase/database";
import { initializeApp } from "@firebase/app";

let app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function AddTxItem(_title, _decs, _value, _time, _type) {
  const newPostKey = push(child(ref(database), 'transactions/')).key;
  const updates = {
  };
  updates['transactions/' + newPostKey] = {
    id: newPostKey,
    title: _title,
    desc: _decs,
    value: _value,
    time: _time,
    type: _type
  };
  return update(ref(database), updates);
}



export function UpdateTxItem(TxId, _title, _decs, _value, _time, _type) {
  console.log(TxId)
  update(ref(database, `transactions/${TxId}` ), {
    title: _title,
    desc: _decs,
    value: _value,
    time: _time,
    type: _type
  });
}

export function DeleteTxItem(TxId) {
  remove(ref(database, 'transactions/' + TxId));
}

